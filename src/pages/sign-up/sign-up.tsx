/* eslint-disable camelcase */
import { FC, ReactElement, useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { registerUser } from 'services/features/user/api';
import { showServerError } from 'services/features/user/selectors';
import { resetServerError } from 'services/features/user/slice';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import { ConsentCheckbox } from 'shared/checkboxes/consent-checkbox/consent-checkbox';
import Button from 'shared/buttons/button/button';
import { MailWithIcon } from 'shared/mail-with-icon/mail-with-icon';
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
  const [hasAgreement, setHasAgreement] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      personal_data_confirmation_has_agreed: hasAgreement,
    },

    validationSchema: Yup.object()
      .shape(schemaName(Yup))
      .shape(schemaLastname(Yup))
      .shape(schemaEmail(Yup))
      .shape(schemaPassword(Yup))
      .shape(schemaPasswordConfirmation(Yup))
      .shape(schemaPersonalDataConsent(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      const { email, password, password_confirmation, first_name, last_name } =
        values;
      const data = filterFormValues({
        email,
        first_name,
        last_name,
      });

      dispatch(
        registerUser({ ...data, password, re_password: password_confirmation })
      )
        .then((res) => {
          if (res.type.endsWith('fulfilled')) {
            localStorage.setItem('hasEmailActivation', JSON.stringify(true));
            setIsSuccess(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAgreement = (evt: ChangeEvent<HTMLInputElement>) => {
    setHasAgreement(!hasAgreement);
    handleChange(evt);
  };

  const initialState = (
    <>
      <div className={styles.inputs}>
        <div className={styles.person}>
          <Input
            name="first_name"
            label="Имя*"
            autoComplete="on"
            value={values.first_name}
            error={errors?.first_name}
            serverError={serverError?.first_name}
            touched={touched?.first_name}
            hasCheckmark={!serverError?.first_namel}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Input
            name="last_name"
            label="Фамилия*"
            autoComplete="on"
            value={values.last_name}
            error={errors?.last_name}
            serverError={serverError?.last_name}
            touched={touched?.last_name}
            hasCheckmark={!serverError?.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <Input
          type="email"
          name="email"
          label="Email*"
          placeholder="example@example.ru"
          autoComplete="on"
          value={values.email}
          error={errors?.email}
          serverError={serverError?.email}
          touched={touched?.email}
          hasCheckmark={!serverError?.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Пароль*"
          icon
          value={values.password}
          error={errors?.password}
          serverError={serverError?.password}
          touched={touched?.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password_confirmation"
          label="Повторите пароль*"
          icon
          value={values.password_confirmation}
          error={errors?.password_confirmation}
          touched={touched?.password_confirmation}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      <div className={styles.consentConfirmation}>
        <ConsentCheckbox
          id="sign-up"
          name="personal_data_confirmation_has_agreed"
          isChecked={hasAgreement}
          isValid={!errors?.personal_data_confirmation_has_agreed}
          onChange={handleAgreement}
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
    </>
  );

  const successState = (
    <div className={styles.content}>
      <p className={styles.instruction}>
        Мы&nbsp;отправили вам письмо на&nbsp;почтовый адрес. Для&nbsp;завершения
        регистрации необходимо перейти по&nbsp;ссылке из&nbsp;письма
        и&nbsp;подтвердить email. Ссылка действительна ограниченное время.
      </p>
      <div className={styles.iconWrapper}>
        <MailWithIcon />
      </div>
    </div>
  );

  const navigation = (
    <div className={styles.navigation}>
      <span>Есть аккаунт?</span>{' '}
      <Button
        label="Войти"
        model="tertiary"
        onClick={() => navigate(routes.signin)}
      />
    </div>
  );

  return (
    <Entry
      heading={isSuccess ? 'Подтверждение email' : 'Регистрация'}
      buttonType={isSuccess ? 'button' : 'submit'}
      buttonLabel={isSuccess ? 'Перейти на главную' : 'Зарегистрироваться'}
      altNavigation={isSuccess ? null : navigation}
      isLoading={isSubmitting}
      isDisabled={!isValid || !!serverError}
      hasCommentaryWithRequired={!isSuccess}
      onSubmit={handleSubmit}
      onClick={isSuccess ? () => navigate(routes.home) : undefined}
    >
      {(isSuccess && successState) || initialState}
    </Entry>
  );
};

export default SignUpPage;
