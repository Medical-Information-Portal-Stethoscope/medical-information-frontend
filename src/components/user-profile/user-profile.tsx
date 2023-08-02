import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import styles from './user-profile.module.scss';

function UserProfile() {
  return (
    <section className={styles.userProfile}>
      <h2 className={styles.userProfile_title}>Профиль</h2>
      <h3 className={styles.userProfile_subtitle}>Личные данные</h3>
      <div className={styles.userProfile_box}>
        <p>Имя фамилия</p>
        <p className={styles.userProfile_userName}>Дарья Врачева</p>
        <p>Статус</p>
        <div>
          <p className={styles.userProfile_userName}>Пользователь</p>
          <p className={styles.userProfile_quote}>
            Вы можете подтвердить свой статус врача, обратившись к
            администратору: admin@stethoscope-portal.ru
          </p>
        </div>
      </div>
      <h3 className={styles.userProfile_subtitle}>Изменение пароля</h3>
      <form className={styles.userProfile_form}>
        <Input
          type="password"
          name="password"
          label="Новый пароль"
          icon
          // value={values.password}
          // error={errors?.password}
          // serverError={serverError?.password}
          // touched={touched?.password}
          // onBlur={handleBlur}
          // onChange={handleChange}
        />
        <Input
          type="password"
          name="password_confirmation"
          label="Повторите новый пароль"
          icon
          // value={values.password_confirmation}
          // error={errors?.password_confirmation}
          // touched={touched?.password_confirmation}
          // onBlur={handleBlur}
          // onChange={handleChange}
        />
        <Button
          type="submit"
          label="Сохранить новый пароль"
          extraClass={styles.userProfile_button}
          // isLoading={isLoading}
          // isDisabled={isDisabled}
        />
      </form>
    </section>
  );
}

export default UserProfile;
