import { ReactNode } from 'react';
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
  // Получаем список всех корневых тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  const idNewsTag = newsTag ? newsTag.pk : '';
  // Находим тег специализации
  const specializationsTag = tags.find((tag) => tag.name === 'Специализации');
  const idSpecializationsTag = specializationsTag ? specializationsTag.pk : '';
  // Получаем список топ 6 статей по новизне и по тегу "специализации"
  const { data } = useGetAllArticlesQuery(
    { idNewsTag, idSpecializationsTag },
    { skip: !newsTag || !specializationsTag }
  );

  const { articles } = useAppSelector((store) => store.filteredArticles);

  // При клике по табу делаем запрос на получение статей по id таба
  const handleClickTab = (id: string) => {
    dispatch(getFilteredArticles({ id, idNewsTag }));
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

  const hasFilteredData =
    filteredArticles && filteredArticles?.length > 0
      ? true
      : filteredArticles === null;

  const hasButton =
    filteredArticles && filteredArticles?.length === 6
      ? true
      : filteredArticles === null;

  return topArticles ? (
    <section>
      <div className={styles.wrapper}>
        <MainCarousel onChangeTab={handleClickTab} />
        <h2 className={styles.heading}>Статьи</h2>
        <div className={hasFilteredData ? styles.articles : styles.empty}>
          {hasFilteredData ? (
            filteredArticles || topArticles
          ) : (
            <p className={styles.text}>По заданным фильтрам ничего нет</p>
          )}
          {hasButton && (
            <Link to={routes.articles.route}>
              <CardMoreContent
                heading="Еще статьи"
                icon={<Icon icon="BigArrowIcon" color="white" />}
                extraClass={styles.article}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  ) : null;
}
