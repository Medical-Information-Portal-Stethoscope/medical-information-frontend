import { ReactNode } from 'react';
import { useGetArticlesQuery } from 'services/features/articles/api';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import CardMoreContent from 'components/cards/more-content/more-content';
import { TArticle } from 'utils/types/article';
import { Icon } from 'shared/icons';
import styles from './articles.module.scss';

const maxNumArticlesDesktop = 6;

export default function Articles() {
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
        <div className={styles.articles}>
          {articles}
          <CardMoreContent
            heading="Еще статьи"
            icon={<Icon icon="BigArrowIcon" color="white" />}
            extraClass={styles.article}
          />
        </div>
      </div>
    </section>
  );
}
