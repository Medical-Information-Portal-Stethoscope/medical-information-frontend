import { ReactNode } from 'react';
import { useGetArticlesQuery } from 'services/features/articles/api';
import MainCarousel from 'components/carousel/MainCarousel';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import Button from 'shared/buttons/button/button';
import { TArticle } from 'utils/types/article';
import styles from './articles-preview-page.module.scss';

const maxNumArticlesDesktop = 6;

export default function ArticlesPreviewPage() {
  const { data } = useGetArticlesQuery();

  const articles: ReactNode | null =
    data?.results
      .slice(0, maxNumArticlesDesktop)
      .map((article: TArticle) => (
        <CardArticlePreview
          key={article.id}
          data={article}
          type="default"
          extraClass={styles.article}
        />
      )) || null;

  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Статьи</h2>
        <MainCarousel />
        <div className={styles.gallery}>
          <div className={styles.content}>{articles}</div>
          <Button label="Еще статьи" model="secondary" size="small" hasBorder />
        </div>
      </div>
    </section>
  );
}
