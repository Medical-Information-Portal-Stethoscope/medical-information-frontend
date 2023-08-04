import { ReactNode, useEffect } from 'react';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import {
  getNextPageContent,
  useGetAllArticlesQuery,
} from 'services/features/information-material/api';
import MainCarousel from 'components/carousel/MainCarousel';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import Button from 'shared/buttons/button/button';
import { TArticle } from 'utils/types/article';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { getFirstPageArticles } from 'services/features/information-material/slice';
import {
  articlesStorage,
  isAllContentArticles,
  isLoadingContent,
  nextArticlesPage,
} from 'services/features/information-material/selectors';
import routes from 'utils/routes';
import styles from './articles-preview-page.module.scss';

export default function ArticlesPreviewPage() {
  const dispatch = useAppDispatch();
  const articlesBase = useAppSelector(articlesStorage);
  const nextPageArticles = useAppSelector(nextArticlesPage);
  const isAllContent = useAppSelector(isAllContentArticles);
  const isLoading = useAppSelector(isLoadingContent);
  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех статей
  const { data } = useGetAllArticlesQuery(newsTag?.pk, { skip: !newsTag });

  useEffect(() => {
    if (data) {
      dispatch(getFirstPageArticles(data));
    }
  }, [data]); // eslint-disable-line

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  const uploadNextPageArticles = () => {
    if (nextPageArticles) {
      dispatch(getNextPageContent(nextPageArticles));
    }
  };

  const articles: ReactNode | null =
    articlesBase.map((article: TArticle) => (
      <CardArticlePreview
        key={article.id}
        data={article}
        type="default"
        extraClass={styles.article}
        route={routes.articles.route}
      />
    )) || null;

  return (
    <>
      <Header />
      <main>
        <section>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>Статьи</h2>
            <MainCarousel type="articles" />
            <div className={styles.gallery}>
              <div className={styles.content}>{articles}</div>
              {!isAllContent && (
                <Button
                  label="Еще статьи"
                  model="secondary"
                  size="small"
                  hasBorder
                  onClick={uploadNextPageArticles}
                  isLoading={isLoading}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
