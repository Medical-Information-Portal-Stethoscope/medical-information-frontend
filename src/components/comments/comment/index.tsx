/* eslint-disable react/destructuring-assignment */
import { UserHeaderIcon } from 'components/user-header-icon';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import renderFormatDateArticle from 'utils/functions/render-format-date-article';
import Button from 'shared/buttons/button/button';
import { TComment } from 'utils/types/article';
import styles from './styles.module.scss';

const Comment = (comment: TComment) => {
  // текущий пользователь под логином
  const { user } = useAppSelector(showUserPersonalData);

  const commentDate = renderFormatDateArticle(comment.created_at);

  //   владелец комментария
  const { author } = comment;
  // для комментов можно ли удалять?
  const isCommentOwner = user?.id === author.id;

  const authorName =
    author?.first_name && author?.last_name
      ? `${author?.first_name} ${author?.last_name}`
      : 'Диванный Эксперт';

  const authorNameLogo =
    author?.first_name && author?.last_name
      ? `${author?.first_name[0]} ${author?.last_name[0]}`
      : 'Диванный Эксперт';

  const removeComment = () => {
    removeComment();
  };

  return (
    <div
      className={`${styles.comment} ${
        isCommentOwner ? styles.comment_owner : null
      }`}
    >
      <div className={styles.comment__info}>
        <div className={styles.comment__user}>
          <UserHeaderIcon
            name={authorNameLogo}
            role={author.role}
            avatar=""
            isHeader={false}
          />
          <div className={styles.comment__meta}>
            <span className={styles.comment__name}>{authorName}</span>
            <span className={styles.comment__date}>{commentDate}</span>
          </div>
        </div>

        {isCommentOwner && (
          <Button
            model="tertiary"
            onClick={removeComment}
            label="Удалить"
            extraClass={styles.comment__remove}
          />
        )}
      </div>
      <p className={styles.comment__text}>{comment.text}</p>
    </div>
  );
};

export default Comment;
