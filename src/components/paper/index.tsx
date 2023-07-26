/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC } from 'react';
import { Link } from 'react-router-dom';

import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import findReadingTimeArticle from 'utils/functions/find-reading-time-article';

import { DotIcon } from 'shared/icons/dot-icon';
import { ClockIcon } from 'shared/icons/clock-icon';
import { ViewsIcon } from 'shared/icons/views-icon';

import { ForwardIcon } from 'shared/icons/forward-icon';
import { BookmarkIcon } from 'shared/icons/bookmark-icon';
import { CommentsIcon } from 'shared/icons/comments-icon';

import Button from 'shared/buttons/button/button';
import ButtonWithIconThree from 'shared/buttons/button-with-icon-three/button-with-icon-three';

import { articleExample } from 'components/paper/data/data';

import { TArticle } from 'utils/types/article';

import styles from './styles.module.scss';

interface Ipaper {
  data: TArticle;
  type: 'media' | 'news' | 'default';
  extraClass?: string;
}

export const Paper: FC<Ipaper> = ({
  data = articleExample,
  type = 'default',
  extraClass,
}) => {
  const date = renderFormatDateArticle(data.created_at);
  const readingTime = findReadingTimeArticle(data.text);

  const handleAddBookmark = () => null;
  const handleAddComment = () => null;
  const handleForward = () => null;

  return (
    <article className={styles.paper} id={data.id}>
      <p className={styles.paper__date}>{date}</p>
      <h2 className={styles.paper__header}>{data.title}</h2>
      <p className={styles.paper__annotation}>{data.annotation}</p>
      <div className={styles.paper__info}>
        <ClockIcon color="gray" size="24" className={styles.paper__clock} />
        <p className={styles.paper__time}>{readingTime}</p>
        <DotIcon size="24" color="gray" className={styles.paper__dot} />
        <ViewsIcon color="gray" size="24" />
        <p className={styles.paper__views}>{data.views_count}</p>
      </div>
      <img
        className={styles.paper__cover}
        src={data.image}
        alt={`Превью статьи: ${data.title}`}
      />
      <p className={styles.paper__text}>{data.text}</p>

      <div className={styles.paper__buttons}>
        <ButtonWithIconThree
          icon={<BookmarkIcon color="gray" size="32" />}
          isSelected={data.is_favorited}
          onClick={handleAddBookmark}
          extraClass={styles.paper__button}
        />
        <ButtonWithIconThree
          icon={<ForwardIcon color="gray" size="32" />}
          onClick={handleForward}
          extraClass={styles.paper__button}
        />
        <ButtonWithIconThree
          icon={<CommentsIcon color="gray" size="24" />}
          onClick={handleAddComment}
          // extraClass={styles.paper__comments}
          extraClass={`${styles.paper__button}`}
        />
      </div>

      {/* TODO: определить ссылку на автора */}
      <div className={styles.paper__additional}>
        <p className={styles.paper__additional_text}>Автор:</p>
        <Link
          className={styles.paper__author}
          to="/author/#"
        >{`${data.author?.first_name} ${data.author?.last_name}`}</Link>
      </div>

      {data.tags ? (
        <div className={styles.paper__additional}>
          <p className={styles.paper__additional_text}>Теги:</p>
          <ul className={styles.paper__tags}>
            {data?.tags.map((tag, idx) => (
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
      ) : null}
    </article>
  );
};
