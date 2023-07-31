import { FC } from 'react';
import { TArticle } from 'utils/types/article';
import { NewsPreviewSmall } from 'components/news-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';
import { newsExample } from './data/news';

import styles from './styles.module.scss';

interface INews {
  data: TArticle[];
}

const tmpId = '72693381-ddb5-4585-b491-1621cf7f730a';

export const News: FC<INews> = ({ data = newsExample }) => {
  const { id = tmpId } = useParams();
  const selectedData = data.find((item) => item.id === id)!;
  return (
    <section className={styles.news}>
      <div className={styles.news__container}>
        <Paper data={selectedData} type="default" isNews />
        <NewsPreviewSmall data={data} />
      </div>
    </section>
  );
};
