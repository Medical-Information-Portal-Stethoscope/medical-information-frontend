import { FC } from 'react';
import { Icon } from 'shared/icons';
import classNames from 'classnames';
import styles from './CardPodcast.module.scss';

export interface ICardPodcastProps {
  title: string;
  link: string;
  extraClass?: string;
}

const CardPodcast: FC<ICardPodcastProps> = ({ title, link, extraClass }) => (
  <article className={classNames(styles.card, extraClass)}>
    <a className={styles.link} href={link}>
      <Icon
        color="white"
        icon="PodcastIcon"
        // onClick={() => {}}
        size="80"
      />
      <h2 className={styles.title}>{title}</h2>
    </a>
  </article>
);

export default CardPodcast;
