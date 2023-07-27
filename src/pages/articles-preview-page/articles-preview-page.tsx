import { ReactNode } from 'react';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import { useGetAllArticlesQuery } from 'services/features/information-material/api';
import MainCarousel from 'components/carousel/MainCarousel';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import Button from 'shared/buttons/button/button';
import { TArticle } from 'utils/types/article';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import styles from './articles-preview-page.module.scss';

const maxNumArticlesDesktop = 6;

export default function ArticlesPreviewPage() {
  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех статей
  const { data } = useGetAllArticlesQuery(newsTag?.pk, { skip: !newsTag });

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
    <>
      <Header />
      <main>
        <section>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>Статьи</h2>
            <MainCarousel type="articles" />
            <div className={styles.gallery}>
              <div className={styles.content}>{articles}</div>
              <Button
                label="Еще статьи"
                model="secondary"
                size="small"
                hasBorder
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
