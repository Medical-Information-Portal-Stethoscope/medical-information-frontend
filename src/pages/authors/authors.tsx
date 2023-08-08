import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import routes from 'utils/routes';
import { Breadcrumbs } from 'components/breadcrumbs';
import styles from './authors.module.scss';

// TODO: one more link for navigation

export const AuthorsPage: FC = (): ReactElement => (
  <>
    <Header />
    <Breadcrumbs extraClass={styles.crumbs} />
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
              о&nbsp;медицине и&nbsp;просвещаться в&nbsp;вопросах здоровья и как
              жить лучше. Если вы&nbsp;хотите продемонстрировать свою экспертизу
              в&nbsp;области медицинских знаний или поделиться практическим
              материалом, основанном на&nbsp;профессиональном или личном опыте,
              вы можете написать статью и&nbsp;отправить нам. Напишите&nbsp;то,
              что будет полезно всем или хотя&nbsp;бы большинству читателей.
              Статья пройдёт модерацию и&nbsp;её&nbsp;опубликуют на&nbsp;сайте.
            </p>
          </section>
          <section className={styles.authorsSection}>
            <h3 className={styles.heading}>Как опубликовать статью</h3>
            <p className={`${styles.text} ${styles.publication}`}>
              Чтобы опубликовать статью, необходимо пройти всего 3&nbsp;шага:
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
                в&nbsp;личный кабинет;
              </li>
              <li className={styles.listItem}>
                Заполнить и&nbsp;отправить{' '}
                <Link className={styles.link} to="/#">
                  форму
                </Link>{' '}
                для публикации статьи;
              </li>
              <li className={styles.listItem}>Вы&nbsp;великолепны.</li>
            </ol>
          </section>
          <section className={styles.authorsSection}>
            <h3 className={styles.heading}>
              Какая информация нужна для публикации:
            </h3>
            <ol>
              <li className={styles.listItem}>Заголовок вашей статьи;</li>
              <li className={styles.listItem}>
                Аннотацию (лид) к&nbsp;статье (не&nbsp;более 400&nbsp;символов);
              </li>
              <li className={styles.listItem}>Текст статьи;</li>
              <li className={styles.listItem}>Наименование источника;</li>
              <li className={styles.listItem}>Ссылка на&nbsp;источник;</li>
              <li className={styles.listItem}>
                Теги для определения тематики и&nbsp;лучшей выдачи
                в&nbsp;поиске;
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
