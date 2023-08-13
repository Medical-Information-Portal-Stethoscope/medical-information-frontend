/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect } from 'react';
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
  const currentMaterial = useAppSelector(getDataById);
  const { user } = useAppSelector(showUserPersonalData);
  const isUserOnline = !!user?.id;

  const [allComments, setAllComments] = useState<IComment[]>(
    currentMaterial.material?.comments || []
  );
  const [visibleComments, setVisibleComments] = useState<IComment[] | []>([]);
  const [isShowBtnVisible, setisShowBtnVisible] = useState<boolean>(
    visibleComments.length < allComments.length
  );

  useEffect(() => {
    const comments = currentMaterial.material?.comments || [];
    const visibleData = comments?.slice(0, maxCommentsDesktop) || [];
    setAllComments(comments);
    setVisibleComments(visibleData);
  }, []);

  useEffect(() => {
    if (allComments.length <= maxCommentsDesktop) {
      setVisibleComments(allComments);
      setisShowBtnVisible(false);
    }
  }, [allComments, visibleComments]);

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

  const sendComment = async () => {
    const reqData = {
      materialId: currentMaterial!.material!.id,
      text: 'comment text',
    };

    dispatch(addCommentToMaterial(reqData)).then((res) => {
      const newComment = (res.payload as IComment) && (res.payload as IComment);
      setAllComments((prev) => [newComment, ...prev]);
      setVisibleComments((prev) => [newComment, ...prev]);
      setFieldValue('comment', '');
    });
  };

  const removeComment = (commentId: string) => {
    dispatch(
      removeCommentFromMaterial({
        materialId: currentMaterial!.material!.id,
        commentId,
      })
    ).then((res) => {
      const resCommentId = res.payload?.id ? res.payload.id : '';
      setAllComments((prev) =>
        prev.filter((comment) => resCommentId !== comment.id && { ...comment })
      );
      setVisibleComments((prev) =>
        prev.filter((comment) => resCommentId !== comment.id && { ...comment })
      );
    });
  };

  return (
    <section className={styles.comments} id="comments">
      <p className={styles.comments__label}>Комментарии к статье</p>
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
