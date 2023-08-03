import { FC, useEffect } from 'react';
import { NewsPreviewSmall } from 'components/news-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';

import routes from 'utils/routes';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { getArticleById } from 'services/features/article/api';
import { getDataById } from 'services/features/article/selectors';
import { newsExample } from './data/news';

import styles from './styles.module.scss';

export const News: FC = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [id]);

  const { article } = useAppSelector(getDataById);

  // TODO: достать две новости из ранее загруженных, пока тестовые данные
  const newsPreviewData = newsExample;

  return article ? (
    <>
      <Header />
      <main>
        <section className={styles.news} aria-label="Страница новости">
          <div className={styles.news__container}>
            <Paper data={article} type="default" isNews />
            <NewsPreviewSmall
              data={newsPreviewData}
              route={routes.news.route}
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
