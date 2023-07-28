import { FC } from 'react';
import { TArticle } from 'utils/types/article';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { articlesExample } from './data/articles';

import styles from './styles.module.scss';

interface IArticlePreviewSmall {
  data: TArticle[];
}

const maxNumCardsDesktop = 2;

export const ArticlesPreviewSmall: FC<IArticlePreviewSmall> = ({
  data = articlesExample,
}) => {
  const articles = data
    .slice(0, maxNumCardsDesktop)
    .map((item) => (
      <CardArticlePreview key={item.id} data={item} type="default" />
    ));

  return (
    <div className={styles.articles}>
      <h3 className={styles.articles__header}>Еще по этой теме</h3>
      <div className={styles.articles__containter}>{articles}</div>
    </div>
  );
};
