/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
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
  useGetMaterialByIdQuery,
} from 'services/features/information-material/api';
import { useScrollToTop } from 'hooks/useScrollToTop';
import styles from './styles.module.scss';

export const Article: FC = () => {
  const { id } = useParams() as { id: string };

  const response = useGetMaterialByIdQuery(id);
  const article = response?.data;
  const errResponse = response.error || {};
  const errCode = 'status' in errResponse ? errResponse.status : null;

  // все теги
  const { data: tags = [] } = useGetRootsTagsQuery();
  const newsTag = tags.find((tag) => tag.name === 'Новости');

  // теги по конкретной статье, исключаем новости
  // есть ли у статьи теги
  const tagsQuery =
    article?.tags && article?.tags.map((tag) => `tags=${tag.pk}`).join('&');
  // есть\нет теги исключений
  const tagsExclude = newsTag?.pk ? `tags_exclude=${newsTag?.pk}` : '';

  const materialTagsQuery = tagsQuery
    ? `${tagsQuery}&${tagsExclude}`
    : tagsExclude;

  const { data } = useGetArticlesbyTagsQuery(materialTagsQuery);

  const materials = data?.results.filter((item) => item.id !== article?.id);

  useScrollToTop();

  return article ? (
    <>
      <Header />
      <Breadcrumbs materialName={article.title} extraClass={styles.crumbs} />
      <main>
        <section className={styles.article} aria-label="Страница статьи">
          <div className={styles.article__container}>
            <Paper data={article} isNews={false} />
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
