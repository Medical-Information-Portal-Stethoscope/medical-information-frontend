/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { NewsPreviewSmall } from 'components/news-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';
import { useScrollToTop } from 'hooks/useScrollToTop';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import { ServerErrorPage } from 'pages/error-page/serverErrorPage';

import routes from 'utils/routes';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import {
  useGetAllNewsQuery,
  useGetMaterialByIdQuery,
} from 'services/features/information-material/api';

import styles from './styles.module.scss';

export const News: FC = () => {
  const { id } = useParams() as { id: string };

  const response = useGetMaterialByIdQuery(id);
  const article = response?.data;
  const errResponse = response.error || {};
  const errCode = 'status' in errResponse ? errResponse.status : null;

  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех новостей
  const { data } = useGetAllNewsQuery(newsTag?.pk, { skip: !newsTag });

  useScrollToTop();

  return article ? (
    <>
      <Header />
      <main>
        <section className={styles.news} aria-label="Страница новости">
          <div className={styles.news__container}>
            <Paper data={article} isNews />
            {data ? (
              <NewsPreviewSmall data={data.results} route={routes.news.route} />
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    (function _() {
      if (errCode === 404) {
        return <NotFoundPage />;
      }
      if (errCode === 500) {
        return <ServerErrorPage />;
      }
      return null;
    })()
  );
};
