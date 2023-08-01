import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import routes from 'utils/routes';
import styles from './authors.module.scss';

// TODO: one more link for navigation

export const AuthorsPage: FC = (): ReactElement => (
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
              Мы очень рады новым авторам на Медицинском информационном портале
              «Стетоскоп». Главная цель МИП Стетоскоп — помогать читателям
              получать знания о медицине и просвещаться в вопросах здоровья и
              как жить лучше. Если вы хотите продемонстрировать свою экспертизу
              в области медицинских знаний или поделиться практическим
              материалом, основанном на профессиональном или личном опыте, вы
              можете написать статью и отправить нам. Напишите то, что будет
              полезно всем или хотя бы большинству читателей. Статья пройдёт
              модерацию и её опубликуют на сайте.
            </p>
          </section>
          <section className={styles.authorsSection}>
            <h3 className={styles.heading}>Как опубликовать статью</h3>
            <p className={`${styles.text} ${styles.publication}`}>
              Чтобы опубликовать статью, необходимо пройти всего 3 шага:
            </p>
            <ol>
              <li className={styles.listItem}>
                <Link className={styles.link} to={routes.signup}>
                  Зарегистрироваться
                </Link>{' '}
                на сайте и/или{' '}
                <Link className={styles.link} to={routes.signin}>
                  войти
                </Link>{' '}
                в личный кабинет;
              </li>
              <li className={styles.listItem}>
                Заполнить и отправить{' '}
                <Link className={styles.link} to="/#">
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
              <li className={styles.listItem}>Наименование источника;</li>
              <li className={styles.listItem}>Ссылка на источник;</li>
              <li className={styles.listItem}>
                Теги для определения тематики и лучшей выдачи в поиске;
              </li>
              <li className={styles.listItem}>Фотографии или иллюстрации.</li>
            </ol>
          </section>
        </section>
      </div>
    </main>
    <Footer />
  </>
);
