import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RightArrowIcon } from 'shared/icons/right-arrow-icon';
import { nanoid } from 'nanoid';
import styles from './style.module.scss';

const materialIdLength = 36;

type AdditionalData = {
  materialName?: string | null;
  extraClass?: string;
};

const routeMapping = {
  home: 'Главная',
  news: 'Новости',
  articles: 'Статьи',
  'about-us': 'O портале',
  authors: 'Авторам',
};

export const Breadcrumbs = ({ materialName, extraClass }: AdditionalData) => {
  let currentLink = '';

  const routeData = [{ name: 'Главная', route: '/' }];

  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  crumbs.map((crumb: string) => {
    currentLink += `/${crumb}`;
    const linkName =
      crumb.length >= materialIdLength
        ? materialName
        : routeMapping[crumb as keyof typeof routeMapping];

    routeData.push({ name: linkName || '', route: currentLink });
    return null;
  });

  return routeData.length > 1 ? (
    <div className={(styles.crumbs, extraClass)}>
      <ul className={styles.crumbs__list}>
        {routeData.map((item) => (
          <React.Fragment key={nanoid()}>
            <li>
              <Link className={styles.crumbs__link} to={item.route}>
                {item.name}
              </Link>
            </li>
            <RightArrowIcon className={styles.crumbs__arrow} color="gray" />
          </React.Fragment>
        ))}
      </ul>
    </div>
  ) : null;
};
