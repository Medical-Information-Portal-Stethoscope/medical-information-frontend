import React, { useState } from 'react';
import { useLocation, Outlet, useOutletContext } from 'react-router-dom';
import { useScrollToTop } from 'hooks/useScrollToTop';
import classNames from 'classnames';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import Sidebar from 'components/sidebar/sidebar';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { tabletAlbumOrientation } from 'utils/constants';
import routes from 'utils/routes';
import styles from './profile-page.module.scss';

type TContextType = {
  isProfileTab: boolean;
  setIsProfileTab: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfilePage() {
  const { pathname } = useLocation();
  const isRouteCreatingAnArticle = pathname.endsWith(
    `${routes.profile}/${routes.publication}`
  );
  const isSmallScreenDevice = useWindowDimensions() <= tabletAlbumOrientation;
  const [isProfileTab, setIsProfileTab] = useState(true);

  useScrollToTop();

  return (
    <>
      <Header />
      <main
        className={classNames(styles.wrapper, {
          [styles[`wrapper--publication`]]: isRouteCreatingAnArticle,
        })}
      >
        {!isProfileTab && isSmallScreenDevice ? null : <Sidebar />}
        <Outlet context={{ isProfileTab, setIsProfileTab }} />
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
export const useProfileTab = () => useOutletContext<TContextType>();
