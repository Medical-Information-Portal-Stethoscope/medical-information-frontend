/* eslint-disable react/no-array-index-key */
import CardPodcast from 'components/cards/card-podcast/CardPodcast';
import MorePodcast from 'components/cards/more-podcast/MorePodcast';
import { podcastsData } from './data/podcastData';
import styles from './styles.module.scss';

const enableNumPodcast = 5;

export const Podcasts = () => {
  // tmp
  const podcasts = podcastsData
    .splice(0, enableNumPodcast)
    .map((podcast, idx) => (
      <li key={idx}>
        <CardPodcast title={podcast.title} link={podcast.link} />
      </li>
    ));

  return (
    <section className={styles.podcasts}>
      <h2 className={styles.podcasts__header}>Подкасты</h2>
      <div className={styles.podcasts__row}>
        <ul className={styles.podcasts__links}>{podcasts}</ul>
        <MorePodcast title="Больше подкастов" link="#" />
      </div>
    </section>
  );
};
