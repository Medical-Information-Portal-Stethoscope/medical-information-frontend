import React, { useState, useEffect } from 'react';
import { useLocation, Outlet, useOutletContext } from 'react-router-dom';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { useToggleButtonVisible } from 'hooks/useToggleButtonVisible';
import classNames from 'classnames';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import Sidebar from 'components/sidebar/sidebar';
import { ButtonTopNavigation } from 'components/buttons/button-top-navigation/button-top-navigation';
import { tabletAlbumOrientation } from 'utils/constants';
import routes from 'utils/routes';
import styles from './profile-page.module.scss';

type TContextType = {
  isProfileTab: boolean;
  setIsProfileTab: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfilePage() {
  const { pathname } = useLocation();
  const isRouteFavorites = pathname.endsWith(
    `${routes.profile}/${routes.favorites}`
  );
  const isRouteCreatingAnArticle = pathname.endsWith(
    `${routes.profile}/${routes.publication}`
  );
  const isSmallScreenDevice = useWindowDimensions() <= tabletAlbumOrientation;
  const [isProfileTab, setIsProfileTab] = useState(true);

  const { isButtonToTopVisible, toggleButtonVisible } =
    useToggleButtonVisible();

  useEffect(() => {
    window.addEventListener('scroll', toggleButtonVisible, false);

    return () => {
      window.removeEventListener('scroll', toggleButtonVisible, false);
    };
  }, []); // eslint-disable-line

  useScrollToTop();

  return (
    <>
      <Header />
      <main
        className={classNames(styles.wrapper, {
          [styles[`wrapper--favorites`]]: isRouteFavorites,
          [styles[`wrapper--publication`]]: isRouteCreatingAnArticle,
        })}
      >
        {!isProfileTab && isSmallScreenDevice ? null : <Sidebar />}
        <Outlet context={{ isProfileTab, setIsProfileTab }} />
        {isSmallScreenDevice && isButtonToTopVisible && <ButtonTopNavigation />}
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
export const useProfileTab = () => useOutletContext<TContextType>();
