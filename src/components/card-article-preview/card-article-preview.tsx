/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC } from 'react';
import classNames from 'classnames';
import FavoriteButton from 'shared/buttons/favorite-button/favorite-button';
import IconViews from './test-data/icon_views';
import styles from './card-article-preview.module.scss';

// TODO: dynamic routes. Here or upper scope?
// TODO: onClick. Here or upper scope?

interface ICardArticlePreviewProps {
  testData: {
    title: string;
    annotation: string;
    text: string;
    image: string;
    created_at: string;
    author: string;
    views_count: number;
  };
  size: 'extraLarge' | 'large' | 'medium' | 'small';
}

const CardArticlePreview: FC<ICardArticlePreviewProps> = ({
  testData: { title, annotation, text, image, created_at, author, views_count },
  size,
}) => {
  const YEAR_NOW = new Date().getFullYear();
  const MONTH_NOW = new Date().getMonth();
  const DAY_NOW = new Date().getDate();

  const AVERAGE_READING_WORDS_PER_MINUTE = 220;
  const totalWordsArticleCounter = text.split(' ').length;
  const readingTime = `${Math.ceil(
    totalWordsArticleCounter / AVERAGE_READING_WORDS_PER_MINUTE
  )} мин`;

  const [year, month, day] = created_at
    .slice(0, created_at.indexOf('T'))
    .split('-')
    .map(Number);

  let dateArticleCreation = new Date(year, month, day).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  dateArticleCreation = dateArticleCreation.slice(
    0,
    dateArticleCreation.lastIndexOf('г') - 1
  );

  let date = dateArticleCreation;

  if (YEAR_NOW === year && MONTH_NOW === month && DAY_NOW === day) {
    date = 'Сегодня';
  }

  if (
    YEAR_NOW === year &&
    MONTH_NOW === month &&
    [-30, -29, -28, -27, 1].includes(DAY_NOW - day) // numbers are the difference between days (taking into account February and leap year)
  ) {
    date = 'Вчера';
  }

  const handleLike = () => {
    console.log('test');
  }; // TODO: onClick. Here or upper scope?

  return (
    <article className={classNames(styles.article, styles[`article--${size}`])}>
      <div className={styles.wrapper}>
        <div
          className={classNames(
            styles.imageWrapper,
            styles[`imageWrapper--${size}`]
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
              styles[`description--${size}`]
            )}
          >
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.text}>{annotation}</p>
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
    </article>
  );
};

export default CardArticlePreview;
