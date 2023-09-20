import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { Icon } from 'shared/icons';
import { Header } from 'components/header';
import { Breadcrumbs } from 'components/breadcrumbs';
import Footer from 'components/footer/footer';
import data from 'utils/data/about-us/our-team';
import { data as gratitude } from 'utils/data/about-us/gratitude';
import styles from './about-us.module.scss';

const team = data.map((item) => (
  <li
    key={nanoid()}
    className={classNames({
      [styles['about--team--creators--managers']]:
        item.department === 'Проджект менеджеры',
      [styles['about--team--creators--designers']]:
        item.department === 'Дизайнеры',
      [styles['about--team--creators--frontenders']]:
        item.department === 'Фронтенд-разработчики',
      [styles['about--team--creators--other']]: [
        'Тестировщики',
        'Бэкенд-разработчики',
      ].includes(item.department),
    })}
  >
    <h4 className={styles['about--team--creators--department']}>
      {item.department}
    </h4>
    {item.data.map((person) => (
      <article key={nanoid()} className={styles.creatorCard}>
        <div className={styles['creatorCard--imageWrapper']}>
          <img
            className={styles['creatorCard--image']}
            src={person.avatar}
            alt="Разработчик проекта"
          />
          {person?.isTeamLead && (
            <span className={styles['creatorCard--image--teamLead']} lang="en">
              Team Lead
            </span>
          )}
        </div>
        <div className={styles['creatorCard--info']}>
          <h5 className={styles['creatorCard--info--name']}>{person.name}</h5>
          <ul className={styles.socialIcons}>
            {person?.tg && (
              <li className={styles.telegram}>
                <a
                  className={styles['creatorCard--info--contacts']}
                  href={person.tg}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Открыть страницу разработчика в мессенджере Telegram"
                >
                  <Icon icon="SocialTelegramIcon" color="lightGray" />
                </a>
              </li>
            )}
            {person?.email && (
              <li className={styles.email}>
                <a
                  className={styles['creatorCard--info--contacts']}
                  href={`mailto:${person.email}`}
                  aria-label="Написать разработчику на электронный адрес"
                >
                  <Icon icon="MailIcon" color="lightGray" />
                </a>
              </li>
            )}
            {person?.github && (
              <li className={styles.github}>
                <a
                  className={styles['creatorCard--info--contacts']}
                  href={person.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Открыть страницу разработчика на сайте GitHub"
                >
                  <Icon icon="SocialGithubIcon" color="lightGray" />
                </a>
              </li>
            )}
            {person?.behance && (
              <li className={styles.behance}>
                <a
                  className={styles['creatorCard--info--contacts']}
                  href={person.behance}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Открыть страницу разработчика на сайте Behance"
                >
                  <Icon icon="SocialBehanceIcon" color="lightGray" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </article>
    ))}
  </li>
));

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <Breadcrumbs />
          <section className={styles.about}>
            <h2 className={styles['about--title']}>О портале</h2>
            <div className={styles['about--paragraphs']}>
              <section>
                <h3 className={styles['about--paragraphs--title']}>Кто мы</h3>
                <p className={styles['about--paragraphs--text']}>
                  Медицинский информационный портал &laquo;Стетоскоп&raquo; (МИП
                  Стетоскоп) разработан по&nbsp;инициативе Акселератора Яндекс
                  Практикума выпускниками курсов{' '}
                  <a
                    className={styles.praktikum}
                    href="https://practicum.yandex.ru/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Яндекс Практикума
                  </a>
                  . МИП Стетоскоп&nbsp;&mdash; это просветительский ресурс
                  о&nbsp;здоровье и&nbsp;качестве жизни. Портал наполнен
                  актуальными медицинскими новостями, статьями и&nbsp;советами
                  экспертов с&nbsp;возможностью фильтрации контента
                  по&nbsp;интересующим темам и&nbsp;подписки на&nbsp;рассылку.
                  Пользователи МИП Стетоскоп могут получать полезную информацию
                  о&nbsp;медицине и&nbsp;быть в&nbsp;курсе последних событий
                  в&nbsp;области здравоохранения.
                </p>
              </section>
              <section>
                <h3 className={styles['about--paragraphs--title']}>Миссия</h3>
                <p className={styles['about--paragraphs--text']}>
                  Наша миссия&nbsp;&mdash; распространять знания о&nbsp;медицине
                  и&nbsp;помогать людям просвещаться в&nbsp;вопросах здоровья,
                  так как не&nbsp;все знают, как вести здоровый образ жизни, как
                  правильно жить с&nbsp;хроническим заболеванием, как ухаживать
                  за&nbsp;больными и&nbsp;когда детям делать прививки. Именно
                  поэтому мы&nbsp;стремимся предоставить нашим читателям
                  доступную информацию, основываясь на&nbsp;принципах
                  доказательной медицины и&nbsp;достоверных источниках.
                </p>
              </section>
              <section>
                <h3 className={styles['about--paragraphs--title']}>
                  Для кого мы пишем
                </h3>
                <p className={styles['about--paragraphs--text']}>
                  Наш портал Стетоскоп предоставляет удобный доступ
                  к&nbsp;медицинской информации для различных категорий
                  пользователей, включая тех, кто следит за&nbsp;своим здоровьем
                  или имеет медицинские жалобы, но&nbsp;не&nbsp;знает,
                  с&nbsp;чего начать путь к&nbsp;выздоровлению. Мы&nbsp;пишем
                  для врачей разных специальностей, которые интересуются
                  новостями в&nbsp;области медицины, стремятся повысить свою
                  квалификацию, обмениваться мнениями или найти справочную
                  информацию. Для родителей, чьи дети нуждаются
                  в&nbsp;профилактике или лечении, а&nbsp;также для тех, кто
                  заботится о&nbsp;больных и&nbsp;ищет советов
                  и&nbsp;рекомендаций, у&nbsp;нас есть полезные ресурсы
                  и&nbsp;информация. Подскажем, как вести здоровый образ жизни,
                  как правильно ухаживать за&nbsp;больными и&nbsp;многое другое.
                  Мы&nbsp;стараемся излагать информацию понятно и&nbsp;доступно
                  для всех пользователей.
                </p>
              </section>
              <section>
                <h3 className={styles['about--paragraphs--title']}>Развитие</h3>
                <p className={styles['about--paragraphs--text']}>
                  Уже в&nbsp;скором времени МИП Стетоскоп будет наполнен
                  актуальными медицинскими новостями, статьями
                  и&nbsp;подкастами. Будет предусмотрена фильтрация контента
                  по&nbsp;интересующим темам и&nbsp;возможность подписаться
                  на&nbsp;рассылку. На&nbsp;нашем портале Стетоскоп
                  вы&nbsp;сможете задать вопрос врачу, квалифицрованные врачи
                  в&nbsp;режиме реального времени смогут ответить
                  на&nbsp;вопросы пользователей. В&nbsp;личном кабинете
                  пользователи смогут собрать коллекцию своих избранных статей.
                </p>
              </section>
            </div>
            <section className={styles.team}>
              <h3 className={styles['about--team--title']}>
                МИП Стетоскоп разработали:
              </h3>
              <ul className={styles['about--team--creators']}>{team}</ul>
            </section>
            <section className={styles['about--team--gratitude']}>
              <h3 className={styles['about--team--title--gratitude']}>
                Выражаем благодарность за вклад в проект:
              </h3>
              <ul className={styles['about--team--list--gratitude']}>
                {gratitude.map((person) => (
                  <li key={nanoid()}>{person}</li>
                ))}
              </ul>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
