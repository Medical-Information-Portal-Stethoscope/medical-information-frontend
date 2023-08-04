import { NavLink } from 'react-router-dom';
import { ConsentCheckbox } from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import routes from 'utils/routes';
import styles from './sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.sidebar_avatar}>
          <p>ДВ</p>
        </div>
        <div>
          <h3 className={styles.sidebar_title}>Дарья Врачева</h3>
          <p className={styles.sidebar_subtitle}>Пользователь</p>
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
      <ConsentCheckbox name="email" value="" id="email" isChecked>
        <p className={styles.sidebar_label}>Подписаться на рассылку</p>
      </ConsentCheckbox>
    </div>
  );
}

export default Sidebar;
