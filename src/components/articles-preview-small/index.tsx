import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TArticle } from 'utils/types/article';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { articlesExample } from './data/articles';

import styles from './styles.module.scss';

interface IArticlePreviewSmall {
  data: TArticle[];
  route: string;
}

const maxNumCardsDesktop = 2;

export const ArticlesPreviewSmall: FC<IArticlePreviewSmall> = ({
  data = articlesExample,
  route,
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

  const articles = randomData.map((item) => (
    <CardArticlePreview
      key={item.id}
      data={item}
      type="default"
      route={route}
      extraClass={styles.articles__item}
    />
  ));

  return (
    <div className={styles.articles}>
      <h3 className={styles.articles__header}>Еще по этой теме</h3>
      <div className={styles.articles__containter}>{articles}</div>
    </div>
  );
};
