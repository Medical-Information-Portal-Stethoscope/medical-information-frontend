import { Link } from 'react-router-dom';
import { Logo } from 'shared/logo';
import routes from 'utils/routes';
import footerLinks from 'utils/data/footer/links';
import footerContacts from 'utils/data/footer/contacts';
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

const contacts = footerContacts.map(({ _id, icon, alt, url, ariaLabel }) => (
  <li key={_id}>
    <a href={url} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      <img className={styles.icon} src={icon} alt={alt} />
    </a>
  </li>
));

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.warning}>
          <h2 className={styles.heading}>
            Имеются противопоказания. Необходима консультация специалиста.
          </h2>
          <p className={styles.paragraph}>
            {
              'Информация на сайте не является руководством по самолечению и представлена для ознакомления.\nКоманда сайта настоятельно рекомендует обратиться к профильному специалисту при подозрении на какое-либо заболевание.'
            }
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} to={routes.home}>
              <Logo />
              <span>медицинский информационный портал</span>
            </Link>
          </div>
          <ul className={styles.links}>{links}</ul>
          <ul className={styles.contacts}>{contacts}</ul>
        </div>
      </div>
    </footer>
  );
}
