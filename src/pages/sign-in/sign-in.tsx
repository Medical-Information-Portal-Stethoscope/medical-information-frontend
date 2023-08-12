import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser, getUserPersonalData } from 'services/features/user/api';
import { resetServerError } from 'services/features/user/slice';
import { showServerError } from 'services/features/user/selectors';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import { filterFormValues } from 'utils/functions/filter-form-values';
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

    onSubmit: (data, { setSubmitting }) => {
      dispatch(loginUser(filterFormValues(data)))
        .then(() => {
          const token: string | null | undefined =
            localStorage.getItem('auth_token');

          if (token) {
            dispatch(getUserPersonalData(token));
            navigate(routes.profile);
          }
        })
        .finally(() => setSubmitting(false));
    },
  });

  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const serverError = useAppSelector(showServerError);

  // Cleaning errors under inputs with the same label from another form
  useEffect(() => {
    if (serverError) {
      dispatch(resetServerError());
    }
  }, []); // eslint-disable-line

  const navigation = (
    <div className={styles.navigation}>
      <span>Нет аккаунта?</span>{' '}
      <Button
        label="Зарегистрироваться"
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
      isLoading={isSubmitting}
      isDisabled={!isValid}
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
          serverError={serverError?.email}
          touched={touched?.email}
          hasCheckmark
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
            serverError={serverError?.non_field_errors || serverError?.password}
            touched={touched?.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button
            label="Забыли пароль?"
            model="tertiary"
            onClick={() => navigate(routes.password.reset)}
          />
        </div>
      </div>
    </Entry>
  );
};

export default SignInPage;
