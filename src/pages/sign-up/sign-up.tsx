/* eslint-disable camelcase */
import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from 'services/app/hooks';
import { registerUser } from 'services/features/user/api';
import { resetServerError } from 'services/features/user/slice';
// import { IUserRegistration } from 'services/features/user/types';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import { ConsentCheckbox } from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import Button from 'shared/buttons/button/button';
import { filterFormValues } from 'utils/functions/filter-form-values';
import privacyPolicy from 'assets/documents/privacy-policy.pdf';
import termsOfUse from 'assets/documents/terms-of-use.pdf';
import routes from 'utils/routes';
import {
  schemaName,
  schemaLastname,
  schemaEmail,
  schemaPassword,
  schemaPasswordConfirmation,
  schemaPersonalDataConsent,
} from 'utils/data/validation/yup-schema';
import styles from './sign-up.module.scss';

const SignUpPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Cleaning errors under inputs with the same label from another form
  useEffect(() => {
    dispatch(resetServerError());
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      personal_data_confirmation_has_agreed: true,
    },

    validationSchema: Yup.object()
      .shape(schemaName(Yup))
      .shape(schemaLastname(Yup))
      .shape(schemaEmail(Yup))
      .shape(schemaPassword(Yup))
      .shape(schemaPasswordConfirmation(Yup))
      .shape(schemaPersonalDataConsent(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      const { email, password, first_name, last_name } = values;
      const data = filterFormValues({ email, password, first_name, last_name });

      dispatch(registerUser(data)).finally(() => setSubmitting(false));
    },
  });

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
      isLoading={formik.isSubmitting}
      isDisabled={!formik.isValid}
      hasCommentaryWithRequired
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.inputs}>
        <div className={styles.person}>
          <Input
            name="first_name"
            label="Имя*"
            autoComplete="on"
            formik={formik}
          />
          <Input
            name="last_name"
            label="Фамилия*"
            autoComplete="on"
            formik={formik}
          />
        </div>
        <Input
          type="email"
          name="email"
          label="Email*"
          placeholder="example@example.ru"
          autoComplete="on"
          formik={formik}
        />
        <Input
          type="password"
          name="password"
          label="Пароль*"
          icon
          formik={formik}
        />
        <Input
          type="password"
          name="password_confirmation"
          label="Повторите пароль*"
          icon
          formik={formik}
        />
      </div>
      <div className={styles.consentConfirmation}>
        <ConsentCheckbox
          id="sign-up"
          name="personal_data_confirmation_has_agreed"
          isChecked
          onChange={formik.handleChange}
        />
        <p>
          Я принимаю условия{' '}
          <a
            className={styles.link}
            href={privacyPolicy}
            target="_blank"
            rel="noreferrer"
          >
            Политики конфиденциальности
          </a>{' '}
          и&nbsp;
          <a
            className={styles.link}
            href={termsOfUse}
            target="_blank"
            rel="noreferrer"
          >
            Пользовательского соглашения
          </a>
        </p>
      </div>
    </Entry>
  );
};

export default SignUpPage;
