import { FC, ReactElement, ChangeEvent, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'shared/input/input';
import TextArea from 'shared/text-area/text-area';
import { FileInput } from 'shared/file-input/file-input';
import Button from 'shared/buttons/button/button';
import ButtonWithIconTwo from 'shared/buttons/button-with-icon-two/button-with-icon-two';
import { Icon } from 'shared/icons';
import {
  schemaArticleTitle,
  schemaArticleAnnotation,
  schemaArticleText,
  schemaArticleSourceName,
  schemaArticleSourceLink,
} from 'utils/data/validation/yup-schema';
import { createArticle } from 'utils/api';
import { Response } from './components/response';
import styles from './creating-an-article.module.scss';

export const CreatingAnArticlePage: FC = (): ReactElement => {
  const [response, setResponse] = useState<undefined | boolean>(undefined);
  const [selectedImage, setSelectedImage] = useState<null | Blob | MediaSource>(
    null
  );
  const [selectedImagePreview, setSelectedImagePreview] = useState('');

  useEffect(() => {
    if (!selectedImage) {
      return setSelectedImagePreview('');
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setSelectedImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const formik = useFormik({
    initialValues: {
      title: '',
      annotation: '',
      text: '',
      source_name: '',
      source_link: '',
    },

    validationSchema: Yup.object()
      .shape(schemaArticleTitle(Yup))
      .shape(schemaArticleAnnotation(Yup))
      .shape(schemaArticleText(Yup))
      .shape(schemaArticleSourceName(Yup))
      .shape(schemaArticleSourceLink(Yup)),

    onSubmit: (data, { setSubmitting }) => {
      // console.log(data);
      createArticle(data)
        .then(() => {
          setResponse(true);
          formik.resetForm();
        })
        .catch(() => setResponse(false))
        .finally(() => setSubmitting(false));
    },
  });

  const {
    values,
    errors,
    dirty,
    isValid,
    isSubmitting,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = formik;

  // TODO: optimize with formik field values and validate form

  const selectFile = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = !evt.target.files ? null : evt.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setFieldValue('image', reader.result);
    };

    setSelectedImage(file);
  };

  const deleteFile = () => {
    setSelectedImage(null);
    setSelectedImagePreview('');
    setFieldValue('image', null);
  };

  const initialState = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.instruction}>
        <h3 className={styles.subheading}>
          Заполните форму и отправьте статью
        </h3>
        <p className={styles.rule}>
          Поля со звёздочкой обязательны для заполнения
        </p>
      </div>
      <div className={styles.inputs}>
        <Input
          name="title"
          label="Заголовок статьи*"
          placeholder="Что делает мозг, пока мы спим"
          value={values.title}
          error={errors?.title}
          onChange={handleChange}
        />
        <TextArea
          name="annotation"
          label="Аннотация*"
          placeholder="3-4 предложения"
          minHeight={97}
          hasCounter
          maxSymbols={400}
          value={values.annotation}
          error={errors.annotation}
          onChange={handleChange}
        />
        <TextArea
          name="text"
          label="Текст статьи*"
          minHeight={128}
          value={values.text}
          error={errors.text}
          onChange={handleChange}
        />
        <Input
          name="source_name"
          label="Источник и/или автор оригинала"
          placeholder="Минздрав или minzdrav.gov.ru"
          value={values.source_name}
          error={errors.source_name}
          onChange={handleChange}
        />
        <Input
          name="source_link"
          label="Ссылка на источник"
          placeholder="https://cuprum.media/lifestyle/the-brain-sleeps"
          value={values.source_link}
          error={errors.source_link}
          onChange={handleChange}
        />
      </div>
      <div className={styles.imageFile}>
        {selectedImagePreview && (
          <div className={styles.imageWrapper}>
            <img
              className={styles.imagePreview}
              src={selectedImagePreview}
              alt="Предпросмотр изображения, добавленного с компьютера пользователя"
            />
            <ButtonWithIconTwo
              extraClass={styles.imageDeleteButton}
              icon={<Icon icon="CancelIcon" color="white" />}
              ariaLabel="Удалить прикрепленное изображение"
              onClick={deleteFile}
            />
          </div>
        )}
        {!selectedImagePreview && (
          <FileInput
            id={nanoid()}
            label="Прикрепить фотографию"
            icon={<Icon icon="PaperClipIcon" color="blue" />}
            accept=".jpg, .jpeg, .png"
            onChange={selectFile}
          />
        )}
        <p className={styles.comment}>
          Фотография обязательна, не более 1,5 MБ в форматах jpg, jpeg или png
        </p>
      </div>
      <div className={styles.submit}>
        <p className={styles.comment}>
          Статья будет опубликована на сайте после модерации
        </p>
        <Button
          type="submit"
          label="Отправить на публикацию"
          size="medium"
          isDisabled={!dirty || !isValid}
          isLoading={isSubmitting}
          hasSpinner
          spinnerSize="small"
          spinnerColor="white"
        />
      </div>
    </form>
  );

  const renderContent = () => {
    switch (response) {
      case true:
        return (
          <Response
            message={
              'Ваша статья отправлена.\nСкоро мы её опубликуем на сайте.'
            }
            status="success"
            button={
              <Button
                label="Написать ещё статью"
                onClick={() => setResponse(undefined)}
              />
            }
          />
        );
      case false:
        return (
          <form onSubmit={handleSubmit}>
            <Response
              message={
                'Во время отравления статьи произошла ошибка.\nПопробуйте отправить ещё раз.'
              }
              status="fail"
              button={
                <Button
                  type="submit"
                  label="Отправить повторно"
                  hasSpinner
                  spinnerSize="small"
                  spinnerColor="white"
                  isLoading={isSubmitting}
                />
              }
            />
          </form>
        );
      default:
        return initialState;
    }
  };

  return (
    <section>
      <div
        className={classNames(styles.wrapper, {
          [styles[`wrapper--response`]]: typeof response === 'boolean',
        })}
      >
        <h2 className={styles.heading}>Публикация статьи</h2>
        {renderContent()}
      </div>
    </section>
  );
};
