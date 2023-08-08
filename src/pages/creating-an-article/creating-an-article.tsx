import { FC, ReactElement, ChangeEvent, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Input from 'shared/input/input';
import { FileInput } from 'shared/file-input/file-input';
import Button from 'shared/buttons/button/button';
import ButtonWithIconTwo from 'shared/buttons/button-with-icon-two/button-with-icon-two';
import { Icon } from 'shared/icons';
import styles from './creating-an-article.module.scss';

export const CreatingAnArticlePage: FC = (): ReactElement => {
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

  const selectFile = (evt: ChangeEvent<HTMLInputElement>) =>
    setSelectedImage(!evt.target.files ? null : evt.target.files[0]);

  const deleteFile = () => {
    setSelectedImage(null);
    setSelectedImagePreview('');
  };

  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Публикация статьи</h2>
        <form className={styles.form}>
          <div className={styles.instruction}>
            <h3 className={styles.subheading}>
              Заполните форму и отправьте статью
            </h3>
            <p className={styles.rule}>Все поля обязательны для заполнения</p>
          </div>
          <div className={styles.inputs}>
            <Input
              label="Заголовок статьи"
              placeholder="Что делает мозг, пока мы спим"
            />
            {/* TEXTAREA */}
            {/* TEXTAREA */}
            <Input
              label="Источник и/или автор оригинала"
              placeholder="Минздрав или minzdrav.gov.ru"
            />
            <Input
              label="Ссылка на источник"
              placeholder="https://minzdrav.gov.ru/сhto-delayet-mozg,-poka-my-spim"
            />
          </div>
          <div>
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
          </div>
          <div className={styles.submit}>
            <p className={styles.comment}>
              Статья будет опубликована на сайте после модерации
            </p>
            <Button
              type="submit"
              label="Отправить на публикацию"
              size="medium"
              hasSpinner
              spinnerSize="small"
              spinnerColor="white"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
