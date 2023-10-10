/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, FC } from 'react';
import { Breadcrumbs } from 'components/breadcrumbs';
import { ArticlesPreviewSmall } from 'components/articles-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import { ServerErrorPage } from 'pages/error-page/serverErrorPage';

import routes from 'utils/routes';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import {
  useGetArticlesbyTagsQuery,
  // useGetMaterialByIdQuery,
} from 'services/features/information-material/api';

import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { getMaterialById } from 'services/features/material/api';
import {
  getDataById,
  getErrStatusAboutDataId,
} from 'services/features/material/selectors';

import { useScrollToTop } from 'hooks/useScrollToTop';

import styles from './styles.module.scss';

export const Article: FC = () => {
  const { id } = useParams() as { id: string };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMaterialById(id));
  }, [id]);

  const { material } = useAppSelector(getDataById);
  const errStatus = useAppSelector(getErrStatusAboutDataId);

  // все теги
  const { data: tags = [] } = useGetRootsTagsQuery();
  const newsTag = tags.find((tag) => tag.name === 'Новости');

  // теги по конкретной статье, исключаем новости
  // есть ли у статьи теги
  const tagsQuery =
    material?.tags && material?.tags.map((tag) => `tags=${tag.pk}`).join('&');
  // есть\нет теги исключений
  const tagsExclude = newsTag?.pk ? `tags_exclude=${newsTag?.pk}` : '';

  const materialTagsQuery = tagsQuery
    ? `${tagsQuery}&${tagsExclude}`
    : tagsExclude;

  const { data } = useGetArticlesbyTagsQuery(materialTagsQuery);

  const materials = data?.results.filter((item) => item.id !== material?.id);

  useScrollToTop();

  return material ? (
    <>
      <Header />
      <main className={styles.main}>
        <Breadcrumbs materialName={material.title} extraClass={styles.crumbs} />
        <section className={styles.article} aria-label="Страница статьи">
          <div className={styles.article__container}>
            <Paper data={material} isNews={false} />
            {materials?.length ? (
              <ArticlesPreviewSmall
                data={materials}
                route={routes.articles.route}
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
