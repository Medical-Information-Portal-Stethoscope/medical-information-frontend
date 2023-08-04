import { FC, ReactElement, useState } from 'react';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import testArticles from 'utils/data/tests/articles';
import styles from './favorites.module.scss';

export const FavoritesPage: FC = (): ReactElement => {
  const [hasFavorites, setHasFavorites] = useState(false);

  const cards = testArticles.map((card) => (
    <CardArticlePreview
      key={card.id}
      data={{
        id: card.id,
        title: card.title,
        annotation: card.annotation,
        text: card.text,
        image: card.image,
        created_at: card.created_at,
        author: card.author,
        views_count: card.views_count,
      }}
      type="default"
      route="test"
    />
  ));

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Избранное</h2>
      <div className={styles.gallery}>{cards}</div>
    </section>
  );
};
