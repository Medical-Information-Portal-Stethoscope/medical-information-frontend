import { useLocation, Outlet } from 'react-router-dom';
import { useScrollToTop } from 'hooks/useScrollToTop';
import classNames from 'classnames';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import Sidebar from 'components/sidebar/sidebar';
import routes from 'utils/routes';
import styles from './profile-page.module.scss';

function ProfilePage() {
  const { pathname } = useLocation();
  const isRouteCreatingAnArticle = pathname.endsWith(
    `${routes.profile}/${routes.publication}`
  );

  useScrollToTop();

  return (
    <>
      <Header />
      <main
        className={classNames(styles.wrapper, {
          [styles[`wrapper--publication`]]: isRouteCreatingAnArticle,
        })}
      >
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default ProfilePage;
