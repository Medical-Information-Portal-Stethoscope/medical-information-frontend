/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';

import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import findReadingTimeArticle from 'utils/functions/find-reading-time-article';

import { DotIcon } from 'shared/icons/dot-icon';
import { ClockIcon } from 'shared/icons/clock-icon';
import { ViewsIcon } from 'shared/icons/views-icon';

// import { ForwardIcon } from 'shared/icons/forward-icon';
import { BookmarkIcon } from 'shared/icons/bookmark-icon';
import { CommentsIcon } from 'shared/icons/comments-icon';

import Button from 'shared/buttons/button/button';
import ButtonWithIconThree from 'shared/buttons/button-with-icon-three/button-with-icon-three';

import { converMdToHTML } from 'utils/functions/convert-md-to-html';

import { TArticle } from 'utils/types/article';

import { Comments } from 'components/comments/comments';

import styles from './styles.module.scss';

interface Ipaper {
  data: TArticle;
  isNews: boolean;
}

export const Paper: FC<Ipaper> = ({ data, isNews = false }) => {
  const date = renderFormatDateArticle(data.created_at);
  const readingTime = findReadingTimeArticle(data.text);
  const ref = useRef<HTMLDivElement>(null);
  const articleHeight = ref?.current?.scrollHeight;

  const handleAddBookmark = () => null;
  const handleAddComment = () => null;
  // const handleForward = () => null;

  return (
    <article className={styles.paper} id={data.id}>
      <div ref={ref}>
        <p className={styles.paper__date}>{date}</p>
        <h2 className={styles.paper__header}>{data.title}</h2>
        <p className={styles.paper__annotation}>
          {converMdToHTML(data.annotation, true)}
        </p>
        <div className={styles.paper__info}>
          <div className={styles.paper__info_block}>
            <ClockIcon color="gray" size="24" className={styles.paper__clock} />
            <p className={styles.paper__time}>{readingTime}</p>
            <DotIcon size="24" color="gray" className={styles.paper__dot} />
            <ViewsIcon color="gray" size="24" />
            <p className={styles.paper__views}>{data.views_count}</p>
          </div>

          {data.source_name ? (
            <div className={styles.paper__info_block}>
              <DotIcon size="24" color="gray" className={styles.paper__dot} />
              <p className={styles.paper__source}>
                Источник:{' '}
                <a
                  className={styles.paper__link}
                  href={data.source_link || '#'}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.source_name}
                </a>
              </p>
            </div>
          ) : null}
        </div>
        <img
          className={styles.paper__cover}
          src={data.image}
          alt={`Превью статьи: ${data.title}`}
        />
        <div className={styles.paper__text}>
          {converMdToHTML(data.text, false)}
        </div>

        <div className={styles.paper__buttons}>
          {/* сохранить только для статей */}
          {!isNews && (
            <ButtonWithIconThree
              icon={
                <BookmarkIcon
                  color="gray"
                  size="32"
                  className={styles.bookmark}
                />
              }
              isSelected={data.is_favorited}
              onClick={handleAddBookmark}
              extraClass={styles.paper__button}
            />
          )}
          {/* поделиться в текущем релизе не используется ни для статьи, ни для новости */}
          {/* <ButtonWithIconThree
            icon={
              <ForwardIcon color="gray" size="32" className={styles.forward} />
            }
            onClick={handleForward}
            extraClass={styles.paper__button}
          /> */}
          <a href="#comments">
            <ButtonWithIconThree
              icon={
                <CommentsIcon
                  color="gray"
                  size="24"
                  className={styles.forward}
                />
              }
              onClick={handleAddComment}
              extraClass={`${styles.paper__button} `}
            />
          </a>
        </div>

        {/* TODO: определить ссылку на автора */}
        <div className={styles.paper__additional}>
          <p className={styles.paper__additional_text}>Автор:</p>
          <Link
            className={styles.paper__author}
            to="/authors/#"
          >{`${data.author?.first_name} ${data.author?.last_name}`}</Link>
        </div>

        {data.tags && !isNews ? (
          <div className={styles.paper__additional_tags}>
            <p className={styles.paper__additional_text}>Теги:</p>
            <ul className={styles.paper__tags}>
              {data?.tags.map((tag, idx) => (
                <li key={idx}>
                  <Button
                    model="secondary"
                    label={tag.name}
                    id={tag.pk}
                    color="white"
                    hasBorder
                    size="small"
                    extraClass={styles.paper__tag}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <Comments
        currentMaterial={data}
        articleHeight={articleHeight}
        isNews={isNews}
      />
    </article>
  );
};
