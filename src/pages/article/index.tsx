/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { ArticlesPreviewSmall } from 'components/articles-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';
import { ServerErrorPage } from 'pages/error-page/serverErrorPage';

import routes from 'utils/routes';
import { getArticleById } from 'services/features/article/api';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import { useGetAllArticlesQuery } from 'services/features/information-material/api';

import {
  getDataById,
  getErrStatusAboutDataId,
} from 'services/features/article/selectors';

import styles from './styles.module.scss';

export const Article: FC = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [id]);

  const { article } = useAppSelector(getDataById);
  const errStatus = useAppSelector(getErrStatusAboutDataId);

  // TODO: решить вопрос с запросом двух статей по тегам для превью
  // const currentTags = article.tags
  // переписать запрос с использованием тегов, пока беру любые статьи

  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех статей
  const { data } = useGetAllArticlesQuery(newsTag?.pk, { skip: !newsTag });

  return article ? (
    <>
      <Header />
      <main>
        <section className={styles.article} aria-label="Страница статьи">
          <div className={styles.article__container}>
            <Paper data={article} type="default" isNews={false} />
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
