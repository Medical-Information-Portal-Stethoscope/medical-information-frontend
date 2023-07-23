import { FC } from 'react';
import { Icon } from 'shared/icons';
import styles from './MorePodcast.module.scss';

export interface IMorePodcast {
  title: string;
  link: string;
}

const MorePodcast: FC<IMorePodcast> = ({ title, link }) => (
  <article className={styles.card}>
    <a className={styles.link} href={link}>
      <h2 className={styles.title}>{title}</h2>
      <Icon
        className={styles.icon}
        color="white"
        icon="PodcastIcon"
        // onClick={() => {}}
        size="80"
      />
    </a>
  </article>
);

export default MorePodcast;
