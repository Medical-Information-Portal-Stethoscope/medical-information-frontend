import { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import {
  schemaPassword,
  schemaPasswordConfirmation,
} from 'utils/data/validation/yup-schema';
import { resetPasswordConfirmation } from 'utils/api';
import { filterFormValues } from 'utils/functions/filter-form-values';
import styles from './reset-password-confirmation.module.scss';

export const ResetPasswordConfirmationPage: FC = (): ReactElement => {
  const location = useLocation();

  const queries = new URLSearchParams(location.search);
  const uid = queries.get('uid');
  const token = queries.get('token');

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirmation: '',
    },

    validationSchema: Yup.object()
      .shape(schemaPassword(Yup))
      .shape(schemaPasswordConfirmation(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      resetPasswordConfirmation(uid, token, filterFormValues(values)).finally(
        () => setSubmitting(false)
      );
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
      heading="Придумайте новый пароль"
      buttonLabel="Сохранить новый пароль"
      isLoading={isSubmitting}
      isDisabled={!isValid}
      onSubmit={handleSubmit}
    >
      <div className={styles.content}>
        <Input
          type="password"
          name="password"
          label="Новый пароль"
          icon
          value={values.password}
          error={errors?.password}
          // serverError={serverError?.password}
          touched={touched?.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password_confirmation"
          label="Повторите новый пароль"
          icon
          value={values.password_confirmation}
          error={errors?.password_confirmation}
          touched={touched?.password_confirmation}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
    </Entry>
  );
};
