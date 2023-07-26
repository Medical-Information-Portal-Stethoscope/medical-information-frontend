/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC } from 'react';
import { Link } from 'react-router-dom';

import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import findReadingTimeArticle from 'utils/functions/find-reading-time-article';

import { DotIcon } from 'shared/icons/dot-icon';
import { ClockIcon } from 'shared/icons/clock-icon';
import { ViewsIcon } from 'shared/icons/views-icon';

import Button from 'shared/buttons/button/button';

import { articleExample } from 'components/paper/data/data';

import { PaperType } from 'utils/types/paper';

import styles from './styles.module.scss';

interface Ipaper {
  data: PaperType;
  type: 'media' | 'news' | 'default';
  extraClass?: string;
}

export const Paper: FC<Ipaper> = ({
  data: {
    title,
    annotation,
    text,
    image,
    created_at,
    author,
    views_count,
    tags,
  } = articleExample,
  type,
  extraClass,
}) => {
  const date = renderFormatDateArticle(created_at);
  const readingTime = findReadingTimeArticle(text);

  return (
    <article className={styles.paper}>
      <p className={styles.paper__date}>{date}</p>
      <h2 className={styles.paper__header}>{title}</h2>
      <p className={styles.paper__annotation}>{annotation}</p>
      <div className={styles.paper__info}>
        <ClockIcon color="gray" size="24" className={styles.paper__clock} />
        <p className={styles.paper__time}>{readingTime}</p>
        <DotIcon size="24" color="gray" className={styles.paper__dot} />
        <ViewsIcon color="gray" size="24" />
        <p className={styles.paper__views}>{views_count}</p>
      </div>
      <img
        className={styles.paper__cover}
        src={image}
        alt={`Превью статьи: ${title}`}
      />
      <p className={styles.paper__text}>{text}</p>

      <div className={styles.paper__buttons}>КНОПКИ</div>

      {/* TODO: определить ссылку на автора */}
      <div className={styles.paper__additional}>
        <p className={styles.paper__additional_text}>Автор:</p>
        <Link
          className={styles.paper__author}
          to="/authors/..."
        >{`${author?.first_name} ${author?.last_name}`}</Link>
      </div>

      <div className={styles.paper__additional}>
        <p className={styles.paper__additional_text}>Теги:</p>

        <ul className={styles.paper__tags}>
          {tags.map((tag, idx) => (
            <li key={idx}>
              <Button
                label={tag.name}
                id={tag.pk}
                color="blue"
                size="small"
                extraClass={styles.paper__tag}
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
