import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import {
  useGetAllNewsQuery,
  useGetMostPopularArticleQuery,
} from 'services/features/information-material/api';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import { tabletAlbumOrientation } from 'utils/constants';
import styles from './news.module.scss';

const maxNumNewsDesktop = 6;

export default function News() {
  const navigate = useNavigate();
  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех новостей
  const { data } = useGetAllNewsQuery(newsTag?.pk, {
    skip: !newsTag,
  });

  const mostPopularArticle = useGetMostPopularArticleQuery();
  const isWindowSmall = useWindowDimensions() <= tabletAlbumOrientation;

  const news = data?.results
    .slice(0, maxNumNewsDesktop)
    .map(({ id, title }) => (
      <li className={styles.newsItem} key={id}>
        <Link className={styles.newsLink} to={`${routes.news.route}/${id}`}>
          {title}
        </Link>
      </li>
    ));

  return (
    <section aria-label="Популярные статьи и актуальные новости">
      <div className={styles.wrapper}>
        <section>
          <h2 className={styles.heading}>Самое популярное</h2>
          {mostPopularArticle.isSuccess && (
            <CardArticlePreview
              data={mostPopularArticle.data}
              type="media"
              route={routes.articles.route}
            />
          )}
        </section>
        <section className={styles.sectionNews}>
          <h2 className={styles.heading}>Новости</h2>
          <ul className={styles.news}>{news}</ul>
          <Button
            extraClass={classNames({ [styles.button]: isWindowSmall })}
            model={isWindowSmall ? 'secondary' : 'tertiary'}
            size={isWindowSmall ? 'small' : undefined}
            label="Показать все новости"
            hasBorder={isWindowSmall}
            onClick={() => navigate(routes.news.route)}
          />
        </section>
      </div>
    </section>
  );
}
