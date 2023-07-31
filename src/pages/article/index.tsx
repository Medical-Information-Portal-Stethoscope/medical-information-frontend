import { FC } from 'react';
import { TArticle } from 'utils/types/article';
import { ArticlesPreviewSmall } from 'components/articles-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';
import { newsExample } from './data/news';

import styles from './styles.module.scss';

interface IArticle {
  data: TArticle[];
}

const tmpId = '72693381-ddb5-4585-b491-1621cf7f730a';

export const Article: FC<IArticle> = ({ data = newsExample }) => {
  const { id = tmpId } = useParams();
  const selectedData = data.find((item) => item.id === id)!;
  return (
    <section className={styles.article}>
      <div className={styles.article__container}>
        <Paper data={selectedData} type="default" isNews={false} />
        <ArticlesPreviewSmall data={data} />
      </div>
    </section>
  );
};
