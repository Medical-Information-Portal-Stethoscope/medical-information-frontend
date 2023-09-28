import { Link } from 'react-router-dom';
import { Logo } from 'shared/logo';
import routes from 'utils/routes';
import footerLinks from 'utils/data/footer/links';
import styles from './footer.module.scss';

const links = footerLinks.map(({ _id, heading, url, isRoute }) => (
  <li className={styles.footerLinkItem} key={_id}>
    {isRoute ? (
      <Link className={styles.link} to={url} target="_blank" rel="noreferrer">
        {heading}
      </Link>
    ) : (
      <a className={styles.link} href={url} target="_blank" rel="noreferrer">
        {heading}
      </a>
    )}
  </li>
));

const Footer = () => (
  <footer>
    <div className={styles.wrapper}>
      <div className={styles.warning}>
        <h2 className={styles.heading}>
          Имеются противопоказания. Необходима консультация специалиста.
        </h2>
        <p className={styles.paragraph}>
          {
            'Информация на\u00a0сайте не\u00a0является руководством по\u00a0самолечению и\u00a0представлена для ознакомления.\nКоманда сайта настоятельно рекомендует обратиться к\u00a0профильному специалисту при подозрении на\u00a0какое-либо заболевание.'
          }
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link className={styles.logoLink} to={routes.home}>
            <Logo theme="dark" hasCaption />
          </Link>
        </div>
        <ul className={styles.links}>{links}</ul>
        <ul className={styles.contacts}>
          <li className={styles.copyright}>&copy; 2023 Стетоскоп</li>
          <li>
            <a
              className={styles.email}
              href="mailto:admin@stethoscope-portal.ru"
              lang="en"
            >
              admin@stethoscope-portal.ru
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
