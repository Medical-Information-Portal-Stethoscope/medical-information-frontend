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

  // теги
  const { data: tags = [] } = useGetRootsTagsQuery();
  const newsTag = tags.find((tag) => tag.name === 'Новости');

  // теги по конкретной статье, исключаем новости
  const materialTagsQuery = `${article?.tags
    ?.map((tag) => `tags=${tag.pk}`)
    .join('&')}&tags_exclude=${newsTag?.pk}`;

  const { data } = useGetArticlesbyTagsQuery(materialTagsQuery);
  console.log(data);

  useScrollToTop();

  return article ? (
    <>
      <Header />
      <Breadcrumbs materialName={article.title} extraClass={styles.crumbs} />
      <main>
        <section className={styles.article} aria-label="Страница статьи">
          <div className={styles.article__container}>
            <Paper data={article} isNews={false} />
            {data ? (
              <ArticlesPreviewSmall
                data={data.results}
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
