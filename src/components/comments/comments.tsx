import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextArea from 'shared/text-area/text-area';

import Button from 'shared/buttons/button/button';
import { TComment } from 'utils/types/article';
// import { useSelector } from 'react-redux';
// import { getDataById } from 'services/features/material/selectors';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';

import routes from 'utils/routes';
import Comment from './comment';
import { testComments } from './data';

import styles from './styles.module.scss';

let maxCommentsDesktop = 7;

export const Comments = () => {
  const navigate = useNavigate();
  // const currentMaterial = useSelector(getDataById);
  // const comments = currentMaterial.material?.comments || testComments;
  const comments = testComments;
  let visibleData = comments?.slice(0, maxCommentsDesktop) || null;

  const [visibleComments, setVisibleComments] = useState<TComment[] | null>(
    visibleData
  );
  const [isShowBtnVisible, setisShowBtnVisible] = useState<boolean>(
    visibleData.length < comments.length
  );

  const { user } = useAppSelector(showUserPersonalData);
  const isUserOnline = !!user?.id;

  const showAllComments = () => {
    maxCommentsDesktop = comments ? comments.length : maxCommentsDesktop;
    visibleData = comments?.slice(0, maxCommentsDesktop) || null;
    setVisibleComments(visibleData);
    setisShowBtnVisible(false);
  };

  const sendComment = () => {
    // req:
    // material id
    // body: {
    //   "text": "string"
    // }
  };

  return (
    <section className={styles.comments}>
      <p className={styles.comments__label}>Комментарии к статье</p>
      {isUserOnline ? (
        <form action="submit" className={styles.comments__form}>
          <TextArea
            name="comment"
            placeholder="Написать комментарий..."
            minHeight={149}
            value="Тестовый комментарий"
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
          {visibleComments.map((item) => (
            <li key={item.id}>
              <Comment
                author={item.author}
                created_at={item.created_at}
                id={item.id}
                text={item.text}
                updated_at={item.updated_at}
                key={item.id}
              />
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
