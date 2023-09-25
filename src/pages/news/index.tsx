/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, FC } from 'react';
import { Breadcrumbs } from 'components/breadcrumbs';
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
  // useGetMaterialByIdQuery,
} from 'services/features/information-material/api';

import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { getMaterialById } from 'services/features/material/api';
import {
  getDataById,
  getErrStatusAboutDataId,
} from 'services/features/material/selectors';

import styles from './styles.module.scss';

export const News: FC = () => {
  const { id } = useParams() as { id: string };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMaterialById(id));
  }, [id]);

  const { material } = useAppSelector(getDataById);
  const errStatus = useAppSelector(getErrStatusAboutDataId);

  // const response = useGetMaterialByIdQuery(id);
  // const article = response?.data;
  // const errResponse = response.error || {};
  // const errCode = 'status' in errResponse ? errResponse.status : null;

  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех новостей
  const { data } = useGetAllNewsQuery(newsTag?.pk, { skip: !newsTag });

  useScrollToTop();

  return material ? (
    <>
      <Header />
      <Breadcrumbs materialName={material.title} extraClass={styles.crumbs} />
      <main>
        <section className={styles.news} aria-label="Страница новости">
          <div className={styles.news__container}>
            <Paper data={material} isNews />
            {data ? (
              <NewsPreviewSmall
                data={data.results}
                route={routes.news.route}
                extraClass={styles.onNewsPageWidth}
              />
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  ) : (
    (function _() {
      if (errStatus?.status === 404) {
        return <NotFoundPage />;
      }
      if (errStatus?.status === 500) {
        return <ServerErrorPage />;
      }
      return null;
    })()
  );
};
