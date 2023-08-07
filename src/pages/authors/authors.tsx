import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import routes from 'utils/routes';
import styles from './authors.module.scss';

// TODO: one more link for navigation

export const AuthorsPage: FC = (): ReactElement => {
  const { user } = useAppSelector(showUserPersonalData);

  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          {/* TODO: Хлебные крошки */}
          <section className={styles.authors}>
            <h2 className={styles.authorsHeading}>Авторам</h2>
            <section className={styles.authorsSection}>
              <h3 className={styles.heading}>Хочу опубликовать статью</h3>
              <p className={styles.text}>
                Мы&nbsp;очень рады новым авторам на&nbsp;Медицинском
                информационном портале &laquo;Стетоскоп&raquo;. Главная цель МИП
                Стетоскоп&nbsp;&mdash; помогать читателям получать знания
                о&nbsp;медицине и&nbsp;просвещаться в&nbsp;вопросах здоровья
                и&nbsp;как жить лучше. Если вы&nbsp;хотите продемонстрировать
                свою экспертизу в&nbsp;области медицинских знаний или поделиться
                практическим материалом, основанном на&nbsp;профессиональном или
                личном опыте, вы&nbsp;можете написать статью и&nbsp;отправить
                нам. Напишите&nbsp;то, что будет полезно всем или хотя&nbsp;бы
                большинству читателей. Статья пройдёт модерацию
                и&nbsp;её&nbsp;опубликуют на&nbsp;сайте.
              </p>
            </section>
            <section className={styles.authorsSection}>
              <h3 className={styles.heading}>Как опубликовать статью</h3>
              <p className={`${styles.text} ${styles.publication}`}>
                Чтобы опубликовать статью, необходимо пройти всего 3 шага:
              </p>
              <ol>
                <li className={styles.listItem}>
                  <Link
                    className={styles.link}
                    to={
                      user
                        ? `${routes.profile}/${routes.publication}`
                        : routes.signup
                    }
                  >
                    Зарегистрироваться
                  </Link>{' '}
                  на сайте и/или{' '}
                  <Link
                    className={styles.link}
                    to={
                      user
                        ? `${routes.profile}/${routes.publication}`
                        : routes.signin
                    }
                  >
                    войти
                  </Link>{' '}
                  в личный кабинет;
                </li>
                <li className={styles.listItem}>
                  Заполнить и отправить{' '}
                  <Link
                    className={styles.link}
                    to={
                      user
                        ? `${routes.profile}/${routes.publication}`
                        : routes.signin
                    }
                  >
                    форму
                  </Link>{' '}
                  для публикации статьи;
                </li>
                <li className={styles.listItem}>Вы великолепны.</li>
              </ol>
            </section>
            <section className={styles.authorsSection}>
              <h3 className={styles.heading}>
                Какая информация нужна для публикации:
              </h3>
              <ol>
                <li className={styles.listItem}>Заголовок вашей статьи;</li>
                <li className={styles.listItem}>
                  Аннотацию (лид) к статье (не более 400 символов);
                </li>
                <li className={styles.listItem}>Текст статьи;</li>
                <li className={styles.listItem}>
                  Наименование источника и/или оригинала;
                </li>
                <li className={styles.listItem}>Ссылка на источник;</li>
                <li className={styles.listItem}>Фотография или иллюстрация.</li>
              </ol>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
