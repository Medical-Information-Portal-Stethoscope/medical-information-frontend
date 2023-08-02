import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import { resetPassword } from 'utils/api';
import { schemaEmail } from 'utils/data/validation/yup-schema';
import { filterFormValues } from 'utils/functions/filter-form-values';
import styles from './reset-password.module.scss';

export const ResetPasswordPage: FC = (): ReactElement => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object().shape(schemaEmail(Yup)),

    onSubmit: (data, { setSubmitting }) => {
      resetPassword(filterFormValues(data)).finally(() => setSubmitting(false));
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

  return (
    <Entry
      heading="Восстановление пароля"
      buttonLabel="Отправить"
      altNavigation={
        <div className={styles.buttonBack}>
          <Button
            label="Вернуться назад"
            model="tertiary"
            onClick={() => navigate(-1)}
          />
        </div>
      }
      isLoading={isSubmitting}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <div className={styles.content}>
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
          touched={touched?.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </Entry>
  );
};
