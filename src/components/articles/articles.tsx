import { ReactNode, useState } from 'react';
import { useGetAllArticlesQuery } from 'services/features/information-material/api';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import MainCarousel from 'components/carousel/MainCarousel';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import CardMoreContent from 'components/cards/more-content/more-content';
import { TArticle } from 'utils/types/article';
import { Icon } from 'shared/icons';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import routes from 'utils/routes';
import { getFilteredArticles } from 'services/features/filter/api';
import styles from './articles.module.scss';

const maxNumArticlesDesktop = 6;

export default function Articles() {
  const dispatch = useAppDispatch();

  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список топ 6 статей по новизне
  const { data } = useGetAllArticlesQuery(newsTag?.pk, { skip: !newsTag });

  const { articles } = useAppSelector((store) => store.filteredArticles);

  // При клике по табу делаем запрос на получение статей по id таба
  const handleClickAllTab = (id: string) => {
    dispatch(getFilteredArticles(id));
  };

  const topArticles: ReactNode[] | null =
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

  const filteredArticles: ReactNode[] | null =
    articles
      ?.slice(0, maxNumArticlesDesktop)
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
        <MainCarousel onChangeTab={handleClickAllTab} />
        <h2 className={styles.heading}>Статьи</h2>
        <div className={styles.articles}>
          {(filteredArticles && filteredArticles?.length > 1
            ? filteredArticles
            : '123') || topArticles}
          <Link to={routes.articles.route}>
            <CardMoreContent
              heading="Еще статьи"
              icon={<Icon icon="BigArrowIcon" color="white" />}
              extraClass={styles.article}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
