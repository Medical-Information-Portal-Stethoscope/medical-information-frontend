/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addCommentToMaterial,
  removeCommentFromMaterial,
} from 'services/features/material/api';

import TextArea from 'shared/text-area/text-area';

import Button from 'shared/buttons/button/button';
import { IComment } from 'utils/types/article';
import { getDataById } from 'services/features/material/selectors';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';

import routes from 'utils/routes';
import Comment from './comment';

import styles from './styles.module.scss';

const maxCommentsDesktop = 7;

export const Comments = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [allComments, setAllComments] = useState<IComment[]>([]);
  const [visibleComments, setVisibleComments] = useState<IComment[] | []>([]);
  const [isShowBtnVisible, setisShowBtnVisible] = useState<boolean>(
    visibleComments.length < allComments.length
  );

  const currentMaterial = useAppSelector(getDataById);
  const { user } = useAppSelector(showUserPersonalData);
  const isUserOnline = !!user?.id;

  useEffect(() => {
    const comments = currentMaterial.material?.comments || [];
    const visibleData = comments?.slice(0, maxCommentsDesktop) || [];
    setAllComments(comments);
    setVisibleComments(visibleData);
    setisShowBtnVisible(visibleData.length < comments.length);
  }, []);

  const showAllComments = () => {
    setVisibleComments(allComments);
    setisShowBtnVisible(false);
  };

  const sendComment = async () => {
    const reqData = {
      materialId: currentMaterial!.material!.id,
      text: 'comment text',
    };
    dispatch(addCommentToMaterial(reqData)).then((res) => {
      const newComment = (res.payload as IComment) && (res.payload as IComment);
      setAllComments((prev) => [newComment, ...prev]);
      setVisibleComments((prev) => [newComment, ...prev]);
    });
  };

  const removeComment = (commentId: string) => {
    dispatch(
      removeCommentFromMaterial({
        materialId: currentMaterial!.material!.id,
        commentId,
      })
    ).then((res) => {
      setAllComments((prev) =>
        prev.filter((comment) => commentId !== comment.id && { ...comment })
      );
      setVisibleComments((prev) =>
        prev.filter((comment) => commentId !== comment.id && { ...comment })
      );
    });
  };

  return (
    <section className={styles.comments} id="comments">
      <p className={styles.comments__label}>Комментарии к статье</p>
      {isUserOnline ? (
        <form action="submit" className={styles.comments__form}>
          <TextArea
            name="comment"
            placeholder="Написать комментарий..."
            minHeight={149}
            defaultValue="Тестовый комментарий"
            value="тест"
          />
          <Button
            label="Отправить"
            type="button"
            model="primary"
            extraClass={styles.comments__send}
            onClick={sendComment}
          />
        </form>
      ) : (
        <p className={styles.comments__auth}>
          <Button
            model="tertiary"
            label="Войдите"
            onClick={() => navigate(routes.signin)}
          />{' '}
          или{' '}
          <Button
            model="tertiary"
            label="зарегистрируйтесь"
            onClick={() => navigate(routes.signup)}
          />
          , чтобы оставлять комментарии.
        </p>
      )}

      {visibleComments ? (
        <ul className={styles.comments__list}>
          {visibleComments.map((item: IComment) => (
            <li key={item.id}>
              <Comment comment={item} removeComment={removeComment} />
            </li>
          ))}

          {isShowBtnVisible ? (
            <Button
              model="tertiary"
              onClick={showAllComments}
              label="Все комментарии"
              extraClass={styles.comments__show}
            />
          ) : null}
        </ul>
      ) : null}
    </section>
  );
};
