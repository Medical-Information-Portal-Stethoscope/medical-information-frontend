import { useState, useEffect, FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addCommentToMaterial,
  removeCommentFromMaterial,
} from 'services/features/material/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { schemaComment } from 'utils/data/validation/yup-schema';
import TextArea from 'shared/text-area/text-area';

import Button from 'shared/buttons/button/button';
import { IComment, TArticle } from 'utils/types/article';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';

import routes from 'utils/routes';
import Comment from './comment';

import styles from './styles.module.scss';

const maxCommentsDesktop = 7;

interface ICurrentMaterial {
  currentMaterial: TArticle;
  articleHeight?: number;
}

export const Comments: FC<ICurrentMaterial> = ({
  currentMaterial,
  articleHeight,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const ref = useRef<HTMLUListElement>(null);

  const { user } = useAppSelector(showUserPersonalData);
  const isUserOnline = !!user?.id;

  const { comments } = currentMaterial;
  const reverseComments = [...comments].reverse();
  const [allComments, setAllComments] = useState<IComment[]>(reverseComments);
  const [visibleComments, setVisibleComments] = useState<IComment[]>(
    reverseComments.slice(0, maxCommentsDesktop)
  );
  const [isShowBtnVisible, setisShowBtnVisible] = useState<boolean>(true);
  const [isScrollToDown, setisScrollToDown] = useState<boolean>(false);

  useEffect(() => {
    if (allComments.length <= maxCommentsDesktop) {
      setVisibleComments(allComments);
      setisShowBtnVisible(false);
    }
    if (isScrollToDown) {
      const heightBlockComments = ref.current && ref.current.scrollHeight;
      const heightToBottomComment = 200;
      if (heightBlockComments) {
        const heightOfTop =
          articleHeight &&
          articleHeight + heightBlockComments + heightToBottomComment;
        window.scrollTo({
          top: heightOfTop,
          behavior: 'smooth',
        });
      }
    }
  }, [allComments, isScrollToDown, articleHeight]);

  const showAllComments = () => {
    setVisibleComments(allComments);
    setisShowBtnVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      comment: '',
    },

    validationSchema: Yup.object().shape(schemaComment(Yup)),

    onSubmit: () => {
      formik.resetForm();
    },
  });

  const {
    values,
    errors,
    dirty,
    isValid,
    touched,
    setFieldValue,
    setFieldTouched,
    handleChange,
  } = formik;

  const sendComment = () => {
    const reqData = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      materialId: currentMaterial!.id,
      text: values.comment,
    };

    dispatch(addCommentToMaterial(reqData))
      .then((res) => {
        const newComment = res.payload as IComment;
        setAllComments((prev) => [...prev, newComment]);

        if (allComments.length >= maxCommentsDesktop) {
          setVisibleComments(() => [...allComments, newComment]);
          setisShowBtnVisible(false);
          setisScrollToDown(true);
        }
        setFieldValue('comment', '');
        setFieldTouched('comment', false, false);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  const removeComment = (commentId: string) => {
    dispatch(
      removeCommentFromMaterial({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        materialId: currentMaterial!.id,
        commentId,
      })
    )
      .then((res) => {
        const resCommentId = res.payload?.id ? res.payload.id : '';
        setAllComments((prev) =>
          prev.filter((comment) => resCommentId !== comment.id)
        );
        setVisibleComments((prev) =>
          prev.filter((comment) => resCommentId !== comment.id)
        );
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  return (
    <section className={styles.comments} id="comments">
      <p className={styles.comments__label}>Комментарии к&nbsp;статье</p>
      {isUserOnline ? (
        <form
          onSubmit={sendComment}
          action="submit"
          className={styles.comments__form}
        >
          <TextArea
            name="comment"
            placeholder="Написать комментарий..."
            minHeight={149}
            defaultValue="Тестовый комментарий"
            // hasCounter
            // maxSymbols={4000}
            value={values.comment}
            error={errors.comment}
            touched={touched.comment}
            onFocus={() => setFieldTouched('comment')}
            onChange={handleChange}
          />
          <Button
            label="Отправить"
            type="button"
            model="primary"
            extraClass={styles.comments__send}
            onClick={sendComment}
            isDisabled={!dirty || !isValid}
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
        <ul className={styles.comments__list} ref={ref}>
          {visibleComments.map((item: IComment) => (
            <li key={item.id}>
              <Comment
                comment={item}
                removeComment={removeComment}
                material={currentMaterial}
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
