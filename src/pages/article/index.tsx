import { FC, useEffect } from 'react';
import { ArticlesPreviewSmall } from 'components/articles-preview-small';
import { Paper } from 'components/paper';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { NotFoundPage } from 'pages/error-page/notFoundPage';

import routes from 'utils/routes';
import { getArticleById } from 'services/features/article/api';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { getDataById } from 'services/features/article/selectors';
import { articleExample } from './data';

import styles from './styles.module.scss';

export const Article: FC = () => {
  const { id = '0' } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [id]);

  const { article } = useAppSelector(getDataById);

  // TODO: решить вопрос с запросом двух статей по тегам для превью
  // const currentTags = article.tags

  // TODO: переписать запрос с использованием тегов, пока берем две первые статьи
  // const { results } = useAppSelector(getPreviewArticles);
  // console.log(results)

  return article ? (
    <>
      <Header />
      <main>
        <section className={styles.article} aria-label="Страница статьи">
          <div className={styles.article__container}>
            <Paper data={article} type="default" isNews={false} />
            <ArticlesPreviewSmall
              data={articleExample}
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
