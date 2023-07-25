import { useNavigate } from 'react-router-dom';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import ConsentCheckbox from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import Button from 'shared/buttons/button/button';
// import termsOfUse from 'assets/documents/terms-of-use.pdf'; TODO: к политике конфиденциальности
import routes from 'utils/routes';
import styles from './sign-up.module.scss';

export default function SignUpPage() {
  const navigate = useNavigate();

  const navigation = (
    <div className={styles.navigation}>
      Есть аккаунт?{' '}
      <Button
        label="Войти"
        model="tertiary"
        onClick={() => navigate(routes.signin)}
      />
    </div>
  );

  return (
    <Entry
      heading="Регистрация"
      buttonLabel="Зарегистрироваться"
      altNavigation={navigation}
    >
      <div className={styles.inputs}>
        <div className={styles.person}>
          <Input name="first_name" label="Имя" />
          <Input name="last_name" label="Фамилия" />
        </div>
        <Input name="email" label="Email" placeholder="example@example.ru" />
        <Input type="password" name="password" label="Пароль" icon />
        <Input
          type="password"
          name="confirm_password"
          label="Повторите пароль"
          icon
        />
      </div>
      <ConsentCheckbox id="signUp" name="signnUp" value="signup" isChecked>
        Я соглашаюсь с условиями обработки персональных данных и принимаю{' '}
        {/* <a
          className={styles.link}
          href={termsOfUse}
          target="_blank"
          rel="noreferrer"
        > */}
        Пользовательское соглашение
        {/* </a> TODO: ссылка на политику конфиденциальности. Переделать верстку чекбокса с согласием? */}
      </ConsentCheckbox>
    </Entry>
  );
}
