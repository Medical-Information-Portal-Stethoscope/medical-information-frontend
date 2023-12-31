/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ButtonWithIconTwo from 'shared/buttons/button-with-icon-two/button-with-icon-two';
import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import findReadingTimeArticle from 'utils/functions/find-reading-time-article';
import { Icon } from 'shared/icons';
import { converMdToHTML } from 'utils/functions/convert-md-to-html';

import styles from './article-preview.module.scss';

interface ICardArticlePreviewProps {
  data: {
    id: string;
    title: string;
    annotation: string;
    text: string;
    image: string;
    created_at: string;
    author: {
      id: string;
      first_name: string;
      last_name: string;
    } | null;
    views_count: number;
  };
  type:
    | 'media'
    | 'news'
    | 'favorites'
    | 'fullPageArticle'
    | 'fullPageNews'
    | 'default';
  hasFavoriteButton?: boolean;
  extraClass?: string;
  route: string;
}

const CardArticlePreview: FC<ICardArticlePreviewProps> = ({
  data: { id, title, annotation, text, image, created_at, author, views_count },
  type,
  hasFavoriteButton = true,
  extraClass,
  route,
}) => {
  const date = renderFormatDateArticle(created_at);
  const readingTime = findReadingTimeArticle(text);

  const handleLike = () => {
    // console.log('test');
  }; // TODO: onClick. Here or upper scope?

  return (
    <article
      className={classNames(
        styles.article,
        styles[`article--${type}`],
        extraClass
      )}
    >
      <Link to={`${route}/${id}`}>
        <div className={classNames(styles.wrapper, styles[`wrapper--${type}`])}>
          <div
            className={classNames(
              styles.imageWrapper,
              styles[`imageWrapper--${type}`]
            )}
          >
            <img className={styles.image} src={image} alt="Превью статьи" />
            {hasFavoriteButton && (
              <ButtonWithIconTwo
                extraClass={classNames(
                  styles.favoriteButton,
                  styles[`favoriteButton--${type}`]
                )}
                onClick={handleLike}
                icon={<Icon icon="BookmarkIcon" color="white" size="32" />}
              />
            )}
          </div>
          <div
            className={classNames(styles.content, styles[`content--${type}`])}
          >
            <span className={styles.date}>{date}</span>
            <div
              className={classNames(
                styles.description,
                styles[`description--${type}`]
              )}
            >
              <div className={styles.title}>
                <h3
                  className={classNames(
                    styles.heading,
                    styles[`heading--${type}`]
                  )}
                >
                  {title}
                </h3>
                <p className={classNames(styles.text, styles[`text--${type}`])}>
                  {converMdToHTML(annotation, true)}
                </p>
              </div>
              <ul className={styles.info}>
                <li className={styles.infoItem}>
                  <span className={styles.author}>{`${
                    author?.first_name || 'Елена'
                  } ${author?.last_name || 'Малышева'}`}</span>
                </li>
                <li className={styles.infoItem}>{readingTime}</li>
                <li className={`${styles.infoItem} ${styles.views}`}>
                  <Icon icon="ViewsIcon" color="gray" />
                  <span>{views_count}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CardArticlePreview;
