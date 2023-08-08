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
  useGetAllArticlesQuery,
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

  // TODO: решить вопрос с запросом двух статей по тегам для превью
  // const currentTags = article.tags
  // переписать запрос с использованием тегов, пока беру любые статьи

  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех статей
  const { data } = useGetAllArticlesQuery(newsTag?.pk, { skip: !newsTag });

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
