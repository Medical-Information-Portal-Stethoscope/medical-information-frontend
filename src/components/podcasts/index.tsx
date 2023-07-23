import { useState, useEffect, ReactNode } from 'react';

import CardPodcast, {
  ICardPodcastProps,
} from 'components/cards/card-podcast/CardPodcast';

import styles from './styles.module.scss';

export const Podcasts = (podcasts: ICardPodcastProps[]) => {
  const sumNumPodcasts = 5;
  const [maxVisiblePodcasts, setMaxVisiblePodcasts] = useState<number>(5);
  const [visiblePodcasts, setVisiblePodcasts] = useState<ICardPodcastProps[]>(
    []
  );

  useEffect(() => {
    const newPodcastArr = [...podcasts].splice(0, maxVisiblePodcasts);
    setVisiblePodcasts(newPodcastArr);
  }, []);

  // upd arr
  useEffect(() => {
    const newPodcastArr = [...podcasts].splice(0, maxVisiblePodcasts);
    setVisiblePodcasts(newPodcastArr);
  }, [maxVisiblePodcasts, podcasts]);

  function showMorePodcasts() {
    setMaxVisiblePodcasts((prevValue) => prevValue + sumNumPodcasts);
  }

  return (
    <section className={styles.podcasts}>
      <h2 className={styles.podcasts__header}>Подкасты</h2>
      <ul className={styles.podcasts__links}>
        {visiblePodcasts.map(
          (podcast, idx): ReactNode => (
            <CardPodcast title={podcast.title} link={podcast.link} id={idx} />
          )
        )}
      </ul>
      <div>button</div>
    </section>
  );
};
