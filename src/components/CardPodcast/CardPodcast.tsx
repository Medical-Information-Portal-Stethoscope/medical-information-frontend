import { FC } from 'react';
import { Icon } from 'shared/icons';
import styles from './CardPodcast.module.scss';

export interface ICardPodcastProps {
  title: string;
  link: string;
}

const CardPodcast: FC<ICardPodcastProps> = ({ title, link }) => (
  <li className={styles.card}>
    <a className={styles.link} href={link}>
      <Icon
        color="white"
        icon="PodcastIcon"
        // onClick={() => {}}
        size="80"
      />
      <h2 className={styles.title}>{title}</h2>
    </a>
  </li>
);

export default CardPodcast;
