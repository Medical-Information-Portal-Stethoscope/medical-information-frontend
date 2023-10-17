import { useEffect } from 'react';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import CardSearch from 'components/cards/card-search/card-search';
import Button from 'shared/buttons/button/button';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { ButtonTopNavigation } from 'components/buttons/button-top-navigation/button-top-navigation';
import {
  isAllContent,
  isLoadingContent,
  nextSearchPage,
  searchStorage,
} from 'services/features/search/selectors';
import { useParams } from 'react-router-dom';
import {
  getFirstSearchPage,
  getNextSearchPage,
} from 'services/features/search/api';
import routes from 'utils/routes';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { desktopMedium, tabletAlbumOrientation } from 'utils/constants';
import { useToggleButtonVisible } from 'hooks/useToggleButtonVisible';
import styles from './search-page.module.scss';

export default function SearchPage() {
  const { isButtonToTopVisible, toggleButtonVisible } =
    useToggleButtonVisible();
  const windowDimensions = useWindowDimensions();

  const windowBig = windowDimensions >= desktopMedium;
  const windowSmall = windowDimensions <= tabletAlbumOrientation;

  const dispatch = useAppDispatch();
  const materials = useAppSelector(searchStorage);
  const nextPage = useAppSelector(nextSearchPage);
  const isAllMaterials = useAppSelector(isAllContent);
  const isLoading = useAppSelector(isLoadingContent);
  const { query } = useParams() as { query: string };

  useScrollToTop();

  useEffect(() => {
    dispatch(getFirstSearchPage({ query, pageSize: '10' }));
    window.addEventListener('scroll', toggleButtonVisible, false);

    return () => {
      window.removeEventListener('scroll', toggleButtonVisible, false);
    };
  }, [query]); // eslint-disable-line

  const uploadNextPageNews = () => {
    if (nextPage) {
      dispatch(getNextSearchPage(nextPage));
    }
  };

  const searchMaterials = materials.map((item) => {
    const isNews = item.tags.some((material) => material.name === 'Новости');
    return (
      <CardSearch
        key={item.id}
        data={item}
        route={isNews ? routes.news.route : routes.articles.route}
      />
    );
  });

  return (
    <>
      <Header
        hasHeaderSearchField={windowSmall}
        hasHamburgerMenuSearchField={false}
      />
      <main>
        <section className={styles.search} aria-label="Страница поиска">
          <div className={styles.wrapper}>
            <p className={styles.title}>
              Результаты поиска по запросу{' '}
              <span className={styles.title_heading}>{query}</span>
            </p>
            {searchMaterials.length ? (
              <div className={styles.gallery}>
                <div className={styles.materials}>{searchMaterials}</div>
                {!isAllMaterials && (
                  <Button
                    label="Ещё"
                    model="secondary"
                    size="small"
                    hasBorder
                    onClick={uploadNextPageNews}
                    hasSpinner
                    isLoading={isLoading}
                    spinnerSize="small"
                    spinnerColor="blue"
                    extraClass={styles.button}
                  />
                )}
              </div>
            ) : (
              !isLoading && (
                <div className={styles.description}>
                  <p> К сожалению, ничего не нашли :(</p>
                  <p>
                    Переформулируйте запрос или попробуйте найти что-нибудь
                    другое
                  </p>
                </div>
              )
            )}
          </div>
          {windowBig ? (
            <div className={searchMaterials.length ? styles.topButton : ''}>
              {isButtonToTopVisible && <ButtonTopNavigation />}
            </div>
          ) : (
            isButtonToTopVisible && <ButtonTopNavigation />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
