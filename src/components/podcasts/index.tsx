/* eslint-disable react/no-array-index-key */
import { ReactNode } from 'react';

import CardPodcast, {
  ICardPodcastProps,
} from 'components/cards/card-podcast/CardPodcast';

import MorePodcast from 'components/MorePodcast/MorePodcast';

import { podcastsData } from './data/podcastData';

import styles from './styles.module.scss';

export const Podcasts = (podcasts: ICardPodcastProps[]) => {
  // tmp
  podcasts = podcastsData;

  const enableNumPodcast = 5;
  const visiblePodcasts = [...podcasts].splice(0, enableNumPodcast);

  return (
    <section className={styles.podcasts}>
      <h2 className={styles.podcasts__header}>Подкасты</h2>
      <div className={styles.podcasts__row}>
        <ul className={styles.podcasts__links}>
          {visiblePodcasts.map(
            (podcast, idx): ReactNode => (
              <li key={idx}>
                <CardPodcast title={podcast.title} link={podcast.link} />
              </li>
            )
          )}
        </ul>
        <MorePodcast title="Больше подкастов" link="#" />
      </div>
    </section>
  );
};
