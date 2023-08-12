import { useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import { Icon } from 'shared/icons';
import Button from 'shared/buttons/button/button';
import { PersonalData } from './components/personal-data/personal-data';
import { PasswordChanging } from './components/password-change/password-changing';
import styles from './user-profile.module.scss';

function UserProfile() {
  const [isProfileTab, setIsProfileTab] = useState(true);

  const { user } = useAppSelector(showUserPersonalData);

  const handeUserRole = () => {
    switch (user?.role) {
      case 'doctor':
        return (
          <span className={styles.userProfile_role}>
            Врач (подтверждён) <Icon icon="CheckIcon" color="green" />
          </span>
        );
      default:
        return <span>Пользователь</span>;
    }
  };

  return (
    <section className={styles.userProfile}>
      <div
        className={classNames(styles.userProfile_wrapper, {
          [styles.userProfile_wrapper_password]: !isProfileTab,
        })}
      >
        {(isProfileTab && (
          <>
            <h3 className={styles.userProfile_title}>Профиль</h3>
            <div className={styles.userProfile_general}>
              <div className={styles.userProfile_status}>
                <h4 className={styles.userProfile_status_heading}>Статус</h4>
                {handeUserRole()}
              </div>
              {user?.role === 'user' && (
                <p className={styles.userProfile_quote}>
                  Вы можете подтвердить свой статус врача, обратившись к
                  администратору:{' '}
                  <a
                    className={styles.email}
                    href="mailto:admin@stethoscope-portal.ru"
                    lang="en"
                  >
                    admin@stethoscope-portal.ru
                  </a>
                </p>
              )}
              <Button
                extraClass={styles.userProfile_button_password}
                label="Изменить пароль"
                model="tertiary"
                onClick={() => setIsProfileTab(false)}
              />
            </div>
            <div className={styles.userProfile_box}>
              <PersonalData
                name={user?.first_name}
                lastName={user?.last_name}
              />
            </div>
          </>
        )) || <PasswordChanging onProfileTab={setIsProfileTab} />}
      </div>
    </section>
  );
}

export default UserProfile;
