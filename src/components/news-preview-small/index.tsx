import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TArticle } from 'utils/types/article';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { generateSmallPreview } from 'utils/previewSmall';

import styles from './styles.module.scss';

interface INewsPreviewSmall {
  data: TArticle[];
  route: string;
  extraClass?: string;
}

const maxNumCardsDesktop = 2;

export const NewsPreviewSmall: FC<INewsPreviewSmall> = ({
  data,
  route = '/',
  extraClass,
}) => {
  const { id } = useParams() as { id: string };
  const randomData = generateSmallPreview(data, maxNumCardsDesktop, id);

  const news = randomData.map((item) => (
    <CardArticlePreview
      key={item.id}
      data={item}
      type="news"
      route={route}
      extraClass={extraClass}
    />
  ));

  return (
    <div className={styles.news}>
      <h3 className={styles.news__header}>Другие новости</h3>
      <div className={styles.news__containter}>{news}</div>
    </div>
  );
};
