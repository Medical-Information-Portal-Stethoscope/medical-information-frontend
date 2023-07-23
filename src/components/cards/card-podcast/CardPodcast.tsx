import { FC } from 'react';
import { Icon } from 'shared/icons';
import styles from './CardPodcast.module.scss';

export interface ICardPodcastProps {
  title: string;
  link: string;
  id: string | number;
}

const CardPodcast: FC<ICardPodcastProps> = ({ title, link, id }) => (
  <li className={styles.card} key={id}>
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
