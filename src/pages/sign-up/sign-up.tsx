/* eslint-disable camelcase */
import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from 'services/app/hooks';
import { registerUser } from 'services/features/user/api';
import { IUserRegistration } from 'services/features/user/types';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import { ConsentCheckbox } from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import Button from 'shared/buttons/button/button';
import { filterFormValues } from 'utils/functions/filter-form-values';
// import termsOfUse from 'assets/documents/terms-of-use.pdf'; TODO: к политике конфиденциальности
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

    onSubmit: (values, { resetForm, setSubmitting }) => {
      const { email, password, first_name, last_name } = values;
      const data = filterFormValues({ email, password, first_name, last_name });

      dispatch(registerUser(data))
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
        .finally(() => setSubmitting(false));
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
      <ConsentCheckbox
        id="sign-up"
        name="personal_data_confirmation_has_agreed"
        isChecked
        onChange={formik.handleChange}
      >
        Я соглашаюсь с условиями обработки персональных данных и принимаю{' '}
        {/* <a
          className={styles.link}
          href={termsOfUse}
          target="_blank"
          rel="noreferrer"
        > */}
        Пользовательское соглашение*
        {/* </a> TODO: ссылка на политику конфиденциальности. Переделать верстку чекбокса с согласием? */}
      </ConsentCheckbox>
    </Entry>
  );
};

export default SignUpPage;
