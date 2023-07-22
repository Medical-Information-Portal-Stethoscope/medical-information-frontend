import { Link } from 'react-router-dom';
import data from 'utils/data/medicines/links';
import styles from './medicines.module.scss';

const links = data.map(({ id, heading, image, alt, route }) => (
  <li key={id} className={styles.linksItem}>
    <Link to={route}>
      <h3 className={styles.linkHeading}>{heading}</h3>
      <img className={styles.image} src={image} alt={alt} />
    </Link>
  </li>
));

export default function Medicines() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Лекарства и БАД</h2>
        <ul className={styles.links}>{links}</ul>
      </div>
    </section>
  );
}
