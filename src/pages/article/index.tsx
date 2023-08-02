import { FC } from 'react';
import { ArticlesPreviewSmall } from 'components/articles-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';

import routes from 'utils/routes';

import { articleExample } from './data';

import styles from './styles.module.scss';

const tmpId = '72693381-ddb5-4585-b491-1621cf7f730a';

// { data = newsExample }
export const Article: FC = () => {
  const { id = tmpId } = useParams();

  // как будто достали новость по id
  const data = articleExample;
  const selectedData = data ? data.find((item) => item.id === id) : null;

  // взяли теги
  // const currentTags = selectedData.tags

  // далее достали две статьи по тегам
  const articlePreviewData = articleExample;

  return selectedData ? (
    <>
      <Header />
      <main>
        <section className={styles.article} aria-label="Страница статьи">
          <div className={styles.article__container}>
            <Paper data={selectedData} type="default" isNews={false} />
            <ArticlesPreviewSmall
              data={articlePreviewData}
              route={routes.articles.route}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};
