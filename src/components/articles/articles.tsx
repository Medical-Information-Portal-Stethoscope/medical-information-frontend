import { ReactNode } from 'react';
import { useGetAllArticlesQuery } from 'services/features/information-material/api';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import MainCarousel from 'components/carousel/MainCarousel';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import CardMoreContent from 'components/cards/more-content/more-content';
import { TArticle } from 'utils/types/article';
import { Icon } from 'shared/icons';
import styles from './articles.module.scss';

const maxNumArticlesDesktop = 6;

export default function Articles() {
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
    <section>
      <div className={styles.wrapper}>
        <MainCarousel />
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
