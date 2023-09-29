/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from 'services/app/hooks';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { showUserPersonalData } from 'services/features/user/selectors';
import Tooltip from 'shared/tooltip/tooltip';
import { homeNavLink } from 'utils/data/header/links';
import { Logo } from 'shared/logo';
import routes from 'utils/routes';
import { tabletAlbumOrientation, minSwipeSize } from 'utils/constants';
import { Hamburger } from 'shared/hamburger/hamburger';
import { OverlayingPopup } from 'shared/overlaying-popup/overlaying-popup';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';
import { UserProfileIcon } from '../user-profile-icon';
import { Search } from './search';
import { Menu } from './menu';
import { Billet } from './billet/billet';
import styles from './header.module.scss';

export const Header = () => {
  const isDesktop = useWindowDimensions() > tabletAlbumOrientation;

  const headerRef = useRef<HTMLDivElement>(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);

  // SWIPE
  const [clientYStart, setClientYStart] = useState(0);
  const [clientYEnd, setClientYEnd] = useState(0);

  const handleTogglePopup = () => setIsPopupOpened(!isPopupOpened);

  const swipeStart = (evt: React.TouchEvent<HTMLDivElement>) => {
    setClientYStart(Math.round(evt.touches[0].clientY));
    setClientYEnd(0);
  };

  const swipeEnd = (evt: React.TouchEvent<HTMLDivElement>) =>
    setClientYEnd(Math.round(evt.changedTouches[0].clientY));

  useEffect(() => {
    if (clientYEnd - clientYStart >= minSwipeSize) {
      handleTogglePopup();
    }
  }, [clientYStart, clientYEnd]);

  useEffect(() => {
    const { body } = document;

    // eslint-disable-next-line no-unused-expressions
    isHamburgerMenuOpened
      ? body.classList.add('page_no-scroll')
      : body.classList.remove('page_no-scroll');
  }, [isHamburgerMenuOpened]);

  const navigate = useNavigate();

  const { user } = useAppSelector(showUserPersonalData);
  const userName = `${user?.first_name[0]}${user?.last_name[0]}`;

  const isUserOnline = !!user?.id;

  const navigateToUserProfile = () => navigate(routes.profile);
  const createAriaLabel = () => {
    if (user) {
      return 'Перейти в личный кабинет пользователя';
    }

    return isPopupOpened
      ? 'Закрыть модальное окно'
      : 'Открыть модальное окно с переходами на страницы регистрации и авторизации';
  };

  return (
    <>
      <header className={styles.header}>
        <div
          className={classNames(styles.header__outerWrapper, {
            [styles.header__outerWrapper_active]: isHamburgerMenuOpened,
          })}
          style={{ minHeight: headerRef.current?.clientHeight }}
        >
          <div ref={headerRef} className={styles.header__wrapper}>
            {!isDesktop && (
              <Hamburger
                isMenuOpened={isHamburgerMenuOpened}
                onClick={() => setIsHamburgerMenuOpened(!isHamburgerMenuOpened)}
              />
            )}
            <Link className={styles.header__logo} to={homeNavLink.to}>
              <Logo theme="light" hasCaption />
            </Link>
            {isDesktop && <Menu />}
            <div className={styles.header__search}>
              {isDesktop && <Search />}
              <div
                className={classNames(styles.header__profile, {
                  [styles.header__profile_auth]: user,
                })}
                role="button"
                tabIndex={0}
                aria-label={createAriaLabel()}
                onClick={user ? navigateToUserProfile : handleTogglePopup}
              >
                <UserProfileIcon
                  avatar={user?.avatar || ''}
                  isHeader
                  name={userName}
                  role={user?.role || 'user'}
                  isUserOnline={isUserOnline}
                />
              </div>
            </div>

            {isDesktop && (
              <div
                className={classNames(styles.tooltip, {
                  [styles[`tooltip--open`]]: isPopupOpened,
                })}
              >
                <Tooltip />
              </div>
            )}
          </div>

          {!isDesktop && isHamburgerMenuOpened && <HamburgerMenu />}
        </div>
      </header>

      {!isDesktop && (
        <OverlayingPopup
          isOpened={isPopupOpened}
          onClose={() => setIsPopupOpened(false)}
        >
          <Billet
            extraClass={classNames(styles.billet, {
              [styles.billetActive]: isPopupOpened,
            })}
            onSwipeStart={swipeStart}
            onSwipeEnd={swipeEnd}
          />
        </OverlayingPopup>
      )}
    </>
  );
};
