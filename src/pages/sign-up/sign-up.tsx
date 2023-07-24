import Entry from 'components/entry/entry';
import ConsentCheckbox from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import Button from 'shared/buttons/button/button';
// import routes from 'utils/routes';
import styles from './sign-up.module.scss';

export default function SignUpPage() {
  const navigation = (
    <div className={styles.navigation}>
      Есть аккаунт?
      <Button label="Войти" model="tertiary" />
    </div>
  );

  return (
    <Entry
      heading="Регистрация"
      buttonLabel="Зарегистрироваться"
      altNavigation={navigation}
    >
      {/* <div className={styles.inputs}></div> */}
      <ConsentCheckbox
        id="signUp"
        name="signnUp"
        value="signup"
        label="Я соглашаюсь с условиями обработки персональных данных и принимаю Пользовательское соглашение"
        isChecked
      />
    </Entry>
  );
}
