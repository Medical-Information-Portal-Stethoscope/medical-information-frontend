import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TArticle } from 'utils/types/article';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { generateSmallPreview } from 'utils/previewSmall';

import styles from './styles.module.scss';

interface IArticlePreviewSmall {
  data: TArticle[];
  route: string;
}

const maxNumCardsDesktop = 2;

export const ArticlesPreviewSmall: FC<IArticlePreviewSmall> = ({
  data,
  route,
}) => {
  const { id } = useParams() as { id: string };
  const randomData = generateSmallPreview(data, maxNumCardsDesktop, id);

  const articles = randomData.map((item) => (
    <CardArticlePreview
      key={item.id}
      data={item}
      type="fullPageArticle"
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
