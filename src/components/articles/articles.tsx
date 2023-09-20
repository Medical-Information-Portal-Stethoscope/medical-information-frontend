import { ReactNode, useEffect } from 'react';
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
import { getAllArticles } from 'services/features/filter/slice';
import styles from './articles.module.scss';

const maxNumArticlesDesktop = 6;

export default function Articles() {
  const dispatch = useAppDispatch();
  // Получаем список всех корневых тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  const idNewsTag = newsTag ? newsTag.pk : '';
  // Получаем список топ 6 статей по новизне
  const { data } = useGetAllArticlesQuery(idNewsTag, {
    skip: !newsTag,
  });

  const { articles } = useAppSelector((store) => store.filteredArticles);

  useEffect(() => {
    if (data) {
      dispatch(getAllArticles(data));
    }
  }, [data]); // eslint-disable-line

  // При клике по табу делаем запрос на получение статей по id таба
  const handleClickTab = (id: string) => {
    if (id) {
      dispatch(getFilteredArticles({ id, idNewsTag }));
    } else if (data) {
      dispatch(getAllArticles(data));
    }
  };

  const filteredArticles: ReactNode[] | null =
    articles?.results
      ?.slice(0, maxNumArticlesDesktop)
      .map((article: TArticle) => (
        <CardArticlePreview
          key={article.id}
          data={article}
          type="default"
          extraClass={styles.article}
          route={routes.articles.route}
        />
      )) || null;

  const hasFilteredData = !!(filteredArticles && filteredArticles?.length > 0);

  const hasButton = !!(filteredArticles && filteredArticles?.length === 6);

  return filteredArticles ? (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Статьи</h2>
        <MainCarousel onChangeTab={handleClickTab} />
        <div className={hasFilteredData ? styles.articles : styles.empty}>
          {hasFilteredData ? (
            filteredArticles
          ) : (
            <p className={styles.text}>По заданным фильтрам ничего нет</p>
          )}
          {hasButton && (
            <Link to={routes.articles.route}>
              <CardMoreContent
                heading="Ещё статьи"
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
