import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import UserProfile from 'components/user-profile/user-profile';
import Sidebar from 'components/sidebar/sidebar';
import { FavoritesPage } from 'pages/favorites/favorites';
import routes from 'utils/routes';
import styles from './profile-page.module.scss';

function ProfilePage() {
  const location = useLocation();
  const isRouteFavourites = location.pathname.endsWith(
    `${routes.profile}/${routes.favorites}`
  );

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
