import { FC } from 'react';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams();
  const randomData: TArticle[] = [];

  while (randomData.length < maxNumCardsDesktop) {
    const randomN = Math.floor(Math.random() * data.length);
    const randomItem = data[randomN];
    if (!randomData.includes(randomItem) && randomItem.id !== id) {
      randomData.push(randomItem);
    }
  }

  const news = randomData.map((item) => (
    <CardArticlePreview key={item.id} data={item} type="news" route={route} />
  ));

  return (
    <div className={styles.news}>
      <h3 className={styles.news__header}>Другие новости</h3>
      <div className={styles.news__containter}>{news}</div>
    </div>
  );
};
