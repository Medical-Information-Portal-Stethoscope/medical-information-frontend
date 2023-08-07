import { Route, Routes, useLocation } from 'react-router-dom';
import { useScrollToTop } from 'hooks/useScrollToTop';
import classNames from 'classnames';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import UserProfile from 'components/user-profile/user-profile';
import Sidebar from 'components/sidebar/sidebar';
import { FavoritesPage } from 'pages/favorites/favorites';
import routes from 'utils/routes';
import styles from './profile-page.module.scss';

function ProfilePage() {
  const { pathname } = useLocation();
  const isRouteFavourites = pathname.endsWith(
    `${routes.profile}/${routes.favorites}`
  );

  useScrollToTop();

  return (
    <>
      <Header />
      <main
        className={classNames(styles.wrapper, {
          [styles[`wrapper--favorites`]]: isRouteFavourites,
        })}
      >
        <Sidebar />
        <Routes>
          <Route index element={<UserProfile />} />
          <Route path={routes.favorites} element={<FavoritesPage />} />
          <Route path="publication" element={456} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
