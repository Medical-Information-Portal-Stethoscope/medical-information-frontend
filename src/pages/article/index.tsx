import { FC } from 'react';
import { ArticlesPreviewSmall } from 'components/articles-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/archive/footer/footer';

import { newsExample } from './data/news';

import styles from './styles.module.scss';

const tmpId = '72693381-ddb5-4585-b491-1621cf7f730a';

// { data = newsExample }
export const Article: FC = () => {
  const { id = tmpId } = useParams();

  // как будто достали новость по id
  const data = newsExample;
  const selectedData = data.find((item) => item.id === id)!;

  // далее достали статьи по тегам
  const filteredDataByTags = newsExample;

  return (
    <>
      <Header />
      <main>
        <section className={styles.article}>
          <div className={styles.article__container}>
            {data ? (
              <>
                <Paper data={selectedData} type="default" isNews={false} />
                <ArticlesPreviewSmall data={filteredDataByTags} />
              </>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
