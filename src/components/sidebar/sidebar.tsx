import { useRef, useEffect, useState, MutableRefObject } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import {
  logoutUser,
  subscribeUserToMailingList,
  unsubscribeUserFromMailingList,
} from 'services/features/user/api';
import { showUserPersonalData } from 'services/features/user/selectors';
import { nanoid } from 'nanoid';
import { ConsentCheckbox } from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import { ButtonTopNavigation } from 'components/buttons/button-top-navigation/button-top-navigation';
import { Icon } from 'shared/icons';
import routes from 'utils/routes';
import {
  headerHeightWithIndentsDesktopBig,
  cardFavoritesHeightDesktopBig,
  cardFavoritesGapDesktopBig,
} from 'utils/constants';
import { Avatar } from './components/avatar/avatar';
import styles from './sidebar.module.scss';

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(showUserPersonalData);

  const [hasSubscription, setHasSubscription] = useState(false);
  const [isButtonToTopVisible, setIsButtonToTopVisible] = useState(false);
  const sidebarRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!user) return;

    setHasSubscription(user.subscribed);
  }, [user]);

  const { pathname } = useLocation();
  const isRouteFavorites = pathname.endsWith(
    `${routes.profile}/${routes.favorites}`
  );
  const isRouteCreatingAnArticle = pathname.endsWith(
    `${routes.profile}/${routes.publication}`
  );

  const galleryHeightDesktopBig =
    cardFavoritesHeightDesktopBig * 2 + cardFavoritesGapDesktopBig;

  const toggleButtonVisible = () => {
    if (
      (isRouteFavorites || isRouteCreatingAnArticle) &&
      sidebarRef.current.offsetHeight >= galleryHeightDesktopBig &&
      (document.body.scrollTop > headerHeightWithIndentsDesktopBig ||
        document.documentElement.scrollTop > headerHeightWithIndentsDesktopBig)
    ) {
      setIsButtonToTopVisible(true);
    } else {
      setIsButtonToTopVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleButtonVisible, false);

    return () => {
      window.removeEventListener('scroll', toggleButtonVisible, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // TODO: скорее всего, в массив зависимостей потребуется добавить карточки

  const handleUserRole = () => {
    switch (user?.role) {
      case 'admin':
        return 'Администратор';
      case 'doctor':
        return 'Врач';
      default:
        return 'Пользователь';
    }
  };

  const handleUserSubscription = () => {
    const token = localStorage.getItem('auth_token');

    if (!token) return;

    setHasSubscription(!hasSubscription);
    dispatch(
      hasSubscription
        ? unsubscribeUserFromMailingList(token)
        : subscribeUserToMailingList(token)
    );
  };

  const handleUserOut = () => {
    const token = localStorage.getItem('auth_token');

    if (!token) return;

    dispatch(logoutUser(token)).then(() =>
      navigate(routes.home, { replace: true })
    );
  };

  return (
    <div className={styles.sidebar} ref={sidebarRef}>
      <div className={isButtonToTopVisible ? styles.sidebar_content : ''}>
        <div>
          <div className={styles.sidebar_header}>
            <Avatar
              user={
                user && {
                  first_name: user?.first_name,
                  last_name: user?.last_name,
                  avatar: user?.avatar,
                }
              }
            />
            <div>
              <h2
                className={styles.sidebar_title}
              >{`${user?.first_name} ${user?.last_name}`}</h2>
              <p className={styles.sidebar_subtitle}>{handleUserRole()}</p>
            </div>
          </div>
          <nav>
            <ul className={styles.sidebar_list}>
              <li className={styles.sidebar_list_item}>
                <NavLink
                  end
                  to={routes.profile}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sidebar_item_active}`
                      : `${styles.sidebar_item}`
                  }
                >
                  Профиль
                </NavLink>
              </li>
              <li className={styles.sidebar_list_item}>
                <NavLink
                  end
                  to={routes.favorites}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sidebar_item_active}`
                      : `${styles.sidebar_item}`
                  }
                >
                  Избранное
                </NavLink>
              </li>
              <li className={styles.sidebar_list_item}>
                <NavLink
                  end
                  to={routes.publication}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sidebar_item_active}`
                      : `${styles.sidebar_item}`
                  }
                >
                  Публикация статьи
                </NavLink>
              </li>
            </ul>
          </nav>
          <p className={styles.sidebar_email}>Еженедельная рассылка на email</p>
          <div className={styles.sidebar_mailingList}>
            <ConsentCheckbox
              id={nanoid()}
              name="mailingList"
              isChecked={hasSubscription}
              onChange={handleUserSubscription}
            />
            <p className={styles.sidebar_label}>Подписаться на рассылку</p>
          </div>
          <div className={styles.sidebar_border} />
          <button
            className={styles.sidebar_logout}
            type="button"
            onClick={handleUserOut}
          >
            <Icon icon="LogoutTwoIcon" color="blue" />
            <span>Выйти</span>
          </button>
        </div>
        {isButtonToTopVisible && <ButtonTopNavigation />}
      </div>
    </div>
  );
}

export default Sidebar;
