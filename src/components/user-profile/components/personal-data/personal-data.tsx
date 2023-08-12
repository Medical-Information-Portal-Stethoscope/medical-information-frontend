/* eslint-disable camelcase */
import { FC, ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import { changeUserName } from 'services/features/user/api';
import { showServerError } from 'services/features/user/selectors';
import { schemaName, schemaLastname } from 'utils/data/validation/yup-schema';
import { filterFormValues } from 'utils/functions/filter-form-values';
import styles from './personal-data.module.scss';

interface IPersonalDataProps {
  firstName?: string;
  lastName?: string;
}

export const PersonalData: FC<IPersonalDataProps> = ({
  firstName,
  lastName,
}): ReactElement => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      first_name: firstName,
      last_name: lastName,
    },

    validationSchema: Yup.object()
      .shape(schemaName(Yup))
      .shape(schemaLastname(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      const token = localStorage.getItem('auth_token');

      if (!token) return;

      const { first_name, last_name } = filterFormValues(values);

      dispatch(changeUserName({ token, first_name, last_name })).finally(() =>
        setSubmitting(false)
      );
    },
  });

  const {
    initialValues,
    values,
    errors,
    isValid,
    isSubmitting,
    touched,
    setFieldTouched,
    handleChange,
    handleSubmit,
  } = formik;

  const serverError = useAppSelector(showServerError);

  return (
    <form className={styles.userProfile_form} onSubmit={handleSubmit}>
      <h4 className={styles.userProfile_title}>Личные данные</h4>
      <div className={styles.userProfile_inputs}>
        <Input
          label="Имя"
          name="first_name"
          size="small"
          value={values.first_name}
          error={errors.first_name}
          serverError={serverError?.first_name}
          touched={touched.first_name}
          onFocus={() => setFieldTouched('first_name')}
          onChange={handleChange}
        />
        <Input
          label="Фамилия"
          name="last_name"
          size="small"
          value={values.last_name}
          error={errors.last_name}
          serverError={serverError?.last_name}
          touched={touched.last_name}
          onFocus={() => setFieldTouched('last_name')}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        label="Сохранить"
        size="small"
        hasSpinner
        spinnerSize="small"
        spinnerColor="white"
        isLoading={isSubmitting}
        isDisabled={
          !isValid ||
          (initialValues.first_name === values.first_name &&
            initialValues.last_name === values.last_name)
        }
      />
    </form>
  );
};
