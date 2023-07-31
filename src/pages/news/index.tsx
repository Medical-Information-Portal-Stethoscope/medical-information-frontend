import { FC } from 'react';
import { NewsPreviewSmall } from 'components/news-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';

import { newsExample } from './data/news';

import styles from './styles.module.scss';

const tmpId = '72693381-ddb5-4585-b491-1621cf7f730a';

export const News: FC = () => {
  const { id = tmpId } = useParams();

  // достали новость по id
  const data = newsExample;
  const selectedData = data ? data.find((item) => item.id === id) : null;

  // достали две новости
  const newsPreviewData = newsExample;

  return selectedData ? (
    <>
      <Header />
      <main>
        <section className={styles.news}>
          <div className={styles.news__container}>
            <Paper data={selectedData} type="default" isNews />
            <NewsPreviewSmall data={newsPreviewData} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};
