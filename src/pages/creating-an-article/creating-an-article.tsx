import { FC, ReactElement } from 'react';
import { nanoid } from 'nanoid';
import Input from 'shared/input/input';
import { FileInput } from 'shared/file-input/file-input';
import Button from 'shared/buttons/button/button';
import styles from './creating-an-article.module.scss';

export const CreatingAnArticlePage: FC = (): ReactElement => {
  const fileId = nanoid();

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
            <div className={styles.source}>
              <Input
                label="Источник и/или автор оригинала"
                placeholder="Минздрав"
              />
              <p className={styles.comment}>
                Наименование источника или домен сайта, например:
                minzdrav.gov.ru
              </p>
            </div>
            <Input
              label="Ссылка на источник"
              placeholder="https://minzdrav.gov.ru/novosibirskie-hirurgi-proveli-slozhneyshuyu-operatsiyu"
            />
          </div>
          <FileInput
            id={fileId}
            label="Прикрепить фотографию"
            icon="PaperClipIcon"
            color="blue"
            accept=".jpg, .jpeg, .png"
          />
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
