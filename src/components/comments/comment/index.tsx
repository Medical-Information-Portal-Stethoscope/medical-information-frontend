import { UserProfileIcon } from 'components/user-profile-icon';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import Button from 'shared/buttons/button/button';
import { IComment, TArticle } from 'utils/types/article';
import React, { useEffect, useState } from 'react';
import { minSwipeSize, tabletSmallExtra } from '../../../utils/constants';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import styles from './styles.module.scss';

interface ICommentItem {
  comment: IComment;
  removeComment: (commentId: string) => void;
  material: TArticle | null;
}

const Comment = ({ comment, removeComment, material }: ICommentItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientXStart, setClientXStart] = useState(0);
  const [clientXEnd, setClientXEnd] = useState(0);

  const swipeStart = (evt: React.TouchEvent<HTMLDivElement>) => {
    setClientXStart(Math.round(evt.touches[0].clientX));
    setClientXEnd(0);
  };

  const swipeEnd = (evt: React.TouchEvent<HTMLDivElement>) =>
    setClientXEnd(Math.round(evt.changedTouches[0].clientX));

  useEffect(() => {
    if (clientXEnd > 0 && clientXStart - clientXEnd >= minSwipeSize) {
      setIsOpen(true);
    }
    if (clientXEnd - clientXStart >= minSwipeSize) {
      setIsOpen(false);
    }
  }, [clientXStart, clientXEnd]);

  const isMobile = useWindowDimensions() < tabletSmallExtra;

  // текущий пользователь под логином
  const { user } = useAppSelector(showUserPersonalData);

  const commentDate = renderFormatDateArticle(comment.created_at);

  //   владелец комментария
  const { author } = comment;

  // для комментов можно ли удалять?
  const isCommentOwner = user?.id === author.id;
  // для покдрашивания имени (в зависимости от авторства статьи)
  const isArticleOwner = material?.author?.id === user?.id;

  const authorName = `${author.first_name} ${author.last_name}`;

  const authorNameLogo = `${author.first_name[0]}${author.last_name[0]}`;

  return (
    <div
      className={`${styles.comment} ${
        isCommentOwner ? styles.comment_owner : null
      }`}
      onTouchStart={swipeStart}
      onTouchEnd={swipeEnd}
    >
      <div
        className={`${styles.comment__content} ${
          isCommentOwner ? styles.comment__content_owner : null
        } ${
          isOpen && isMobile && isCommentOwner
            ? styles.comment__content_open
            : null
        }`}
      >
        <div className={styles.comment__info}>
          <div className={styles.comment__user}>
            <UserProfileIcon
              name={authorNameLogo}
              role={author.role}
              avatar={author.avatar}
              isHeader={false}
              isUserOnline={false}
            />
            <div className={styles.comment__meta}>
              <span
                className={`${styles.comment__name} ${
                  isArticleOwner ? styles.comment__name_owner : null
                }`}
              >
                {authorName}
              </span>
              <span className={styles.comment__date}>{commentDate}</span>
            </div>
          </div>
          {isCommentOwner && !isMobile && (
            <Button
              model="tertiary"
              onClick={() => removeComment(comment.id)}
              label="Удалить"
              extraClass={styles.comment__remove}
            />
          )}
        </div>
        <p className={styles.comment__text}>{comment.text}</p>
      </div>
      {isCommentOwner && isMobile && (
        <div
          className={`${styles.comment__removeMobileCont} ${
            isOpen ? styles.comment__removeMobileCont_open : null
          }`}
        >
          {isOpen && (
            <Button
              model="tertiary"
              onClick={() => removeComment(comment.id)}
              label="Удалить"
              extraClass={styles.comment__removeMobile}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
