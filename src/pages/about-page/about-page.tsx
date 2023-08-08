import classNames from 'classnames';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { Breadcrumbs } from 'components/breadcrumbs';
import styles from './about-page.module.scss';
import creatorM from '../../assets/images/CreatorMale.png';
import creatorF from '../../assets/images/CreatorFemale.png';
import data from './test-data';

const team = data.map((item) => (
  <li
    key={item.id}
    className={classNames({
      [styles[`about--team--creators--designers`]]:
        item.department === 'Дизайнеры',
      [styles[`about--team--creators--other`]]: [
        'Тестировщики',
        'Бэкенд-разработчики',
        'Фронтенд-разработчики',
      ].includes(item.department),
    })}
  >
    <p className={classNames(styles[`about--team--creators--department`])}>
      {item.department}
    </p>
    {item.data.map((person) => (
      <div key={person.id} className={styles.creatorCard}>
        <img
          className={classNames(styles[`creatorCard--image`])}
          src={person.gender === 'male' ? creatorM : creatorF}
          alt="Разработчик"
        />
        <div className={classNames(styles[`creatorCard--info`])}>
          <a
            className={classNames(styles[`creatorCard--info--name`])}
            href={person.github}
            target="_blank"
            rel="noreferrer"
          >
            {person.name}
          </a>
          <a
            className={classNames(styles[`creatorCard--info--contacts`])}
            href={person.tg}
            target="_blank"
            rel="noreferrer"
          >
            {person.contacts}
          </a>
        </div>
      </div>
    ))}
  </li>
));

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumbs extraClass={styles.crumbs} />
      <main>
        <section className={styles.wrapper}>
          <h2 className={classNames(styles[`about--title`])}>О портале</h2>
          <div className={classNames(styles[`about--paragraphs`])}>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Кто мы
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Медицинский информационный портал &laquo;Стетоскоп&raquo; (МИП
                Стетоскоп) разработан по&nbsp;инициативе Акселератора Яндекс
                Практикума выпускниками курсов Яндекс Практикума. МИП
                Стетоскоп&nbsp;&mdash; это просветительский ресурс
                о&nbsp;здоровье и&nbsp;качестве жизни. Портал наполнен
                актуальными медицинскими новостями, статьями и&nbsp;советами
                экспертов с&nbsp;возможностью фильтрации контента
                по&nbsp;интересующим темам и&nbsp;подписки на&nbsp;рассылку.
                Пользователи МИП Стетоскоп могут получать полезную информацию
                о&nbsp;медицине и&nbsp;быть в&nbsp;курсе последних событий
                в&nbsp;области здравоохранения.
              </p>
            </div>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Миссия
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Наша миссия&nbsp;&mdash; распространять знания о&nbsp;медицине
                и&nbsp;помогать людям просвещаться в&nbsp;вопросах здоровья, так
                как не&nbsp;все знают, как вести здоровый образ жизни, как
                правильно жить с&nbsp;хроническим заболеванием, как ухаживать
                за&nbsp;больными и&nbsp;когда детям делать прививки. Именно
                поэтому мы&nbsp;стремимся предоставить нашим читателям доступную
                информацию, основываясь на&nbsp;принципах доказательной медицины
                и&nbsp;достоверных источниках.
              </p>
            </div>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Для кого мы пишем
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Наш портал Стетоскоп предоставляет удобный доступ
                к&nbsp;медицинской информации для различных категорий
                пользователей, включая тех, кто следит за&nbsp;своим здоровьем
                или имеет медицинские жалобы, но не&nbsp;знает, с&nbsp;чего
                начать путь к&nbsp;выздоровлению. Мы&nbsp;пишем для врачей
                разных специальностей, которые интересуются новостями в области
                медицины, стремятся повысить свою квалификацию, обмениваться
                мнениями или найти справочную информацию. Для родителей, чьи
                дети нуждаются в&nbsp;профилактике или лечении, а также для тех,
                кто заботится о&nbsp;больных и&nbsp;ищет советов и рекомендаций,
                у&nbsp;нас есть полезные ресурсы и&nbsp;информация. Подскажем,
                как вести здоровый образ жизни, как правильно ухаживать
                за&nbsp;больными и&nbsp;многое другое. Мы&nbsp;стараемся
                излагать информацию понятно и&nbsp;доступно для всех
                пользователей.
              </p>
            </div>
            <div>
              <h3 className={classNames(styles[`about--paragraphs--title`])}>
                Развитие
              </h3>
              <p className={classNames(styles[`about--paragraphs--text`])}>
                Уже в&nbsp;скором времени МИП Стетоскоп будет наполнен
                актуальными медицинскими новостями, статьями и&nbsp;подкастами.
                Будет предусмотрена фильтрация контента по&nbsp;интересующим
                темам и возможность подписаться на&nbsp;рассылку. На&nbsp;нашем
                портале Стетоскоп вы&nbsp;сможете задать вопрос врачу,
                квалифицрованные врачи в&nbsp;режиме реального времени смогут
                ответить на&nbsp;вопросы пользователей. В личном кабинете
                пользователи смогут собрать коллекцию своих избранных статей.
              </p>
            </div>
          </div>
          <div>
            <h3 className={classNames(styles[`about--team--title`])}>
              МИП Стетоскоп разработали:
            </h3>
          </div>
          <ul className={classNames(styles[`about--team--creators`])}>
            {team}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
