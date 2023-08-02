import { FC } from 'react';
import { TArticle } from 'utils/types/article';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { newsExample } from './data/news';

import styles from './styles.module.scss';

interface INewsPreviewSmall {
  data: TArticle[];
  route: string;
}

const maxNumCardsDesktop = 2;

export const NewsPreviewSmall: FC<INewsPreviewSmall> = ({
  data = newsExample,
  route = '/',
}) => {
  const news = data
    .slice(0, maxNumCardsDesktop)
    .map((item) => (
      <CardArticlePreview key={item.id} data={item} type="news" route={route} />
    ));

  return (
    <div className={styles.news}>
      <h3 className={styles.news__header}>Другие новости</h3>
      <div className={styles.news__containter}>{news}</div>
    </div>
  );
};
