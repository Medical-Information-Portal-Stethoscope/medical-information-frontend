import { FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import { MailWithIcon } from 'shared/mail-with-icon/mail-with-icon';
import Button from 'shared/buttons/button/button';
import { resetPassword } from 'utils/api';
import { schemaEmail } from 'utils/data/validation/yup-schema';
import { filterFormValues } from 'utils/functions/filter-form-values';
import routes from 'utils/routes';
import styles from './reset-password.module.scss';

let serverError: undefined | { email: string[] };

export const ResetPasswordPage: FC = (): ReactElement => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object().shape(schemaEmail(Yup)),

    onSubmit: (data, { setSubmitting }) => {
      resetPassword(filterFormValues(data))
        .then(() => {
          setIsSuccess(true);
          localStorage.setItem(
            'hasResetPasswordActivation',
            JSON.stringify(true)
          );
        })
        .catch((err) => {
          serverError = { email: err };
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

  const initialState = (
    <>
      <p className={styles.instruction}>
        Введите email, который вы использовали при&nbsp;регистрации
      </p>
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
    </>
  );

  const successState = (
    <>
      <p className={styles.instruction}>
        Мы отправили инструкцию по восстановлению пароля на указанную почту
      </p>
      <div className={styles.iconWrapper}>
        <MailWithIcon hasStatusIcon statusIcon="success" />
      </div>
    </>
  );

  const navigation = (
    <div className={styles.buttonBack}>
      <Button
        label="Вернуться назад"
        model="tertiary"
        onClick={() => navigate(routes.signin)}
      />
    </div>
  );

  return (
    <Entry
      heading="Восстановление пароля"
      buttonType={isSuccess ? 'button' : 'submit'}
      buttonLabel={isSuccess ? 'Вернуться на главную' : 'Отправить'}
      altNavigation={isSuccess ? null : navigation}
      isLoading={isSubmitting}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
      onClick={isSuccess ? () => navigate(routes.home) : undefined}
    >
      <div className={styles.content}>
        {(isSuccess && successState) || initialState}
      </div>
    </Entry>
  );
};
