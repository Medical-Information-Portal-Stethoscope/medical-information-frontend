import { ReactNode, useEffect, useState } from 'react';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import { useScrollToTop } from 'hooks/useScrollToTop';
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
import {
  getFirstPageArticles,
  setIsAllArticles,
} from 'services/features/information-material/slice';
import {
  articlesStorage,
  isAllContentArticles,
  isLoadingContent,
  nextArticlesPage,
} from 'services/features/information-material/selectors';
import { Breadcrumbs } from 'components/breadcrumbs';
import routes from 'utils/routes';
import { ButtonTopNavigation } from 'components/buttons/button-top-navigation/button-top-navigation';
import { getFilteredArticles } from 'services/features/filter/api';
import styles from './articles-preview-page.module.scss';

export default function ArticlesPreviewPage() {
  const [isButtonToTopVisible, setIsButtonToTopVisible] = useState(false);
  const dispatch = useAppDispatch();
  const articlesBase = useAppSelector(articlesStorage);
  const nextPageArticles = useAppSelector(nextArticlesPage);
  const isAllContent = useAppSelector(isAllContentArticles);
  const isLoading = useAppSelector(isLoadingContent);
  // Получаем список всех корневых тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  const idNewsTag = newsTag ? newsTag.pk : '';
  // Получаем список топ 6 статей по новизне
  const { data } = useGetAllArticlesQuery(idNewsTag, {
    skip: !newsTag,
  });

  useScrollToTop();

  const heightTop = 1500;

  const toggleButtonVisible = () => {
    setIsButtonToTopVisible(
      document.body.scrollTop > heightTop ||
        document.documentElement.scrollTop > heightTop
    );
  };

  useEffect(() => {
    dispatch(setIsAllArticles());
    window.addEventListener('scroll', toggleButtonVisible, false);

    return () => {
      window.removeEventListener('scroll', toggleButtonVisible, false);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    if (data) {
      dispatch(getFirstPageArticles(data));
    }
  }, [data]); // eslint-disable-line

  // При клике по табу делаем запрос на получение статей по id таба
  const handleClickTab = async (id: string) => {
    if (id) {
      const res = await dispatch(getFilteredArticles({ id, idNewsTag }));
      dispatch(getFirstPageArticles(res.payload));
    } else if (data) {
      dispatch(getFirstPageArticles(data));
    }
  };

  const uploadNextPageArticles = () => {
    if (nextPageArticles) {
      dispatch(getNextPageContent(nextPageArticles));
    }
  };

  const articles: ReactNode[] | undefined = articlesBase?.map(
    (article: TArticle) => (
      <CardArticlePreview
        key={article.id}
        data={article}
        type="default"
        extraClass={styles.article}
        route={routes.articles.route}
      />
    )
  );

  return (
    <>
      <Header />
      <Breadcrumbs extraClass={styles.crumbs} />
      <main>
        <section>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>Статьи</h2>
            <MainCarousel type="articles" onChangeTab={handleClickTab} />
            <div className={styles.gallery}>
              <div className={articles.length ? styles.content : styles.empty}>
                {articles.length ? (
                  articles
                ) : (
                  <p className={styles.text}>По заданным фильтрам ничего нет</p>
                )}
              </div>
              {!isAllContent && (
                <Button
                  label="Ещё"
                  model="secondary"
                  size="small"
                  hasBorder
                  onClick={uploadNextPageArticles}
                  isLoading={isLoading}
                  hasSpinner
                  spinnerSize="small"
                  spinnerColor="blue"
                />
              )}
            </div>
          </div>
          <div className={styles.top_button}>
            {isButtonToTopVisible && <ButtonTopNavigation />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
