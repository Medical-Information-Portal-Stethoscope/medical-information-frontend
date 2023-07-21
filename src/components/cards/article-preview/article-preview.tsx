/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC } from 'react';
import classNames from 'classnames';
import FavoriteButton from 'shared/buttons/favorite-button/favorite-button';
import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import findReadingTimeArticle from 'utils/functions/find-reading-time-article';
import IconViews from './test-data/icon_views';
import styles from './article-preview.module.scss';

// TODO: dynamic routes. Here or upper scope?
// TODO: onClick. Here or upper scope?

interface ICardArticlePreviewProps {
  data: {
    title: string;
    text: string;
    image: string;
    created_at: string;
    author: string;
    views_count: number;
  };
  type: 'media' | 'default';
}

const CardArticlePreview: FC<ICardArticlePreviewProps> = ({
  data: { title, text, image, created_at, author, views_count },
  type,
}) => {
  const date = renderFormatDateArticle(created_at);
  const readingTime = findReadingTimeArticle(text);

  const handleLike = () => {
    console.log('test');
  }; // TODO: onClick. Here or upper scope?

  return (
    <article className={classNames(styles.article, styles[`article--${type}`])}>
      <div className={styles.wrapper}>
        <div
          className={classNames(
            styles.imageWrapper,
            styles[`imageWrapper--${type}`]
          )}
        >
          <img className={styles.image} src={image} alt="Превью статьи" />
          <FavoriteButton
            extraClass={styles.favoriteButton}
            onClick={handleLike}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.date}>{date}</span>
          <div
            className={classNames(
              styles.description,
              styles[`description--${type}`]
            )}
          >
            <div className={styles.title}>
              <h3 className={styles.heading}>{title}</h3>
              <p className={classNames(styles.text, styles[`text--${type}`])}>
                {text}
              </p>
            </div>
            <ul className={styles.info}>
              <li className={styles.infoItem}>{author}</li>
              <li className={styles.infoItem}>{readingTime}</li>
              <li className={`${styles.infoItem} ${styles.views}`}>
                <IconViews />
                <span>{views_count}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticlePreview;
