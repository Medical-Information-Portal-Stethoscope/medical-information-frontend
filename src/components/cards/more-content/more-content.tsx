import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import styles from './more-content.module.scss';

interface ICardMoreContent {
  heading: string;
  icon: ReactNode;
  extraClass?: string;
}

const CardMoreContent: FC<ICardMoreContent> = ({
  heading,
  icon,
  extraClass,
}) => (
  <article className={classNames(styles.article, extraClass)}>
    <h3 className={styles.heading}>{heading}</h3>
    {icon}
  </article>
);

export default CardMoreContent;
