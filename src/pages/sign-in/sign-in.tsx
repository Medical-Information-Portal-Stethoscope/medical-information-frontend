import { useNavigate } from 'react-router-dom';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import styles from './sign-in.module.scss';

export default function SignInPage() {
  const navigate = useNavigate();

  const navigation = (
    <div className={styles.navigation}>
      Нет аккаунта?{' '}
      <Button
        label="Зарегистрируйтесь"
        model="tertiary"
        onClick={() => navigate(routes.signup)}
      />
    </div>
  );

  return (
    <Entry
      heading="Вход в аккаунт"
      buttonLabel="Войти"
      altNavigation={navigation}
      extraClass={styles.wrapperRight}
    >
      <div className={styles.inputs}>
        <Input name="email" label="Email" placeholder="example@example.ru" />
        <div className={styles.password}>
          <Input type="password" name="password" label="Пароль" icon />
          <Button label="Забыли пароль?" model="tertiary" />
        </div>
      </div>
    </Entry>
  );
}
