import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'services/app/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser, getUserPersonalData } from 'services/features/user/api';
import { resetServerError } from 'services/features/user/slice';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import { schemaEmail, schemaPassword } from 'utils/data/validation/yup-schema';
import styles from './sign-in.module.scss';

const SignInPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Cleaning errors under inputs with the same label from another form
  useEffect(() => {
    dispatch(resetServerError());
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object()
      .shape(schemaEmail(Yup))
      .shape(schemaPassword(Yup)),

    onSubmit: (data, { setSubmitting }) => {
      dispatch(loginUser(data))
        .then(() => {
          const token: string | null | undefined =
            localStorage.getItem('auth_token');

          if (token) {
            dispatch(getUserPersonalData(token));
          }
        })
        .finally(() => setSubmitting(false));
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  const navigation = (
    <div className={styles.navigation}>
      <span>Нет аккаунта?</span>{' '}
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
      onSubmit={handleSubmit}
    >
      <div className={styles.inputs}>
        <Input
          name="email"
          label="Email"
          placeholder="example@example.ru"
          autoComplete="on"
          value={values.email}
          error={errors?.email}
          touched={touched?.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className={styles.password}>
          <Input
            type="password"
            name="password"
            label="Пароль"
            icon
            value={values.password}
            error={errors?.password}
            touched={touched?.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button label="Забыли пароль?" model="tertiary" />
        </div>
      </div>
    </Entry>
  );
};

export default SignInPage;
