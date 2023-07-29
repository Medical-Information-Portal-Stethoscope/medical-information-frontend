import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'services/app/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from 'services/features/user/api';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import { schemaEmail, schemaPassword } from 'utils/data/validation/yup-schema';
import styles from './sign-in.module.scss';

const SignInPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object()
      .shape(schemaEmail(Yup))
      .shape(schemaPassword(Yup)),

    onSubmit: (data, { resetForm, setSubmitting }) => {
      dispatch(loginUser(data))
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
        .finally(() => setSubmitting(false));
    },
  });

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
      isLoading={formik.isSubmitting}
      isDisabled={!formik.isValid}
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.inputs}>
        <Input
          name="email"
          label="Email"
          placeholder="example@example.ru"
          autoComplete="on"
          formik={formik}
        />
        <div className={styles.password}>
          <Input
            type="password"
            name="password"
            label="Пароль"
            icon
            formik={formik}
          />
          <Button label="Забыли пароль?" model="tertiary" />
        </div>
      </div>
    </Entry>
  );
};

export default SignInPage;
