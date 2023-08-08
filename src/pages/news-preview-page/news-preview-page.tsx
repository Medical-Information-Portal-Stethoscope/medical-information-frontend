import { useEffect } from 'react';
import { Breadcrumbs } from 'components/breadcrumbs';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import {
  getNextPageContent,
  useGetAllNewsQuery,
} from 'services/features/information-material/api';
import Button from 'shared/buttons/button/button';
import {
  getFirstPageNews,
  setIsAllArticles,
} from 'services/features/information-material/slice';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { useScrollToTop } from 'hooks/useScrollToTop';
import {
  isAllContentNews,
  isLoadingContent,
  newsStorage,
  nextNewsPage,
} from 'services/features/information-material/selectors';
import routes from 'utils/routes';
import styles from './news-preview-page.module.scss';

export default function NewsPreviewPage() {
  const dispatch = useAppDispatch();
  const newsBase = useAppSelector(newsStorage);
  const nextPageNews = useAppSelector(nextNewsPage);
  const isAllContent = useAppSelector(isAllContentNews);
  const isLoading = useAppSelector(isLoadingContent);
  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех новостей
  const { data } = useGetAllNewsQuery(newsTag?.pk, { skip: !newsTag });

  useScrollToTop();

  useEffect(() => {
    dispatch(setIsAllArticles());
  }, []); // eslint-disable-line

  useEffect(() => {
    if (data) {
      dispatch(getFirstPageNews(data));
    }
  }, [data]); // eslint-disable-line

  const uploadNextPageNews = () => {
    if (nextPageNews) {
      dispatch(getNextPageContent(nextPageNews));
    }
  };

  const news = newsBase.map((item) => (
    <CardArticlePreview
      key={item.id}
      data={item}
      type="news"
      route={routes.news.route}
    />
  ));

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main>
        <section>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>Новости</h2>
            <div className={styles.gallery}>
              <div className={styles.news}>{news}</div>
              {!isAllContent && (
                <Button
                  label="Еще новости"
                  model="secondary"
                  size="small"
                  hasBorder
                  onClick={uploadNextPageNews}
                  hasSpinner
                  isLoading={isLoading}
                  spinnerSize="small"
                  spinnerColor="blue"
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
