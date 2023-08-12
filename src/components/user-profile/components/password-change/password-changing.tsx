import { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import { changePassword } from 'utils/api';
import {
  schemaPassword,
  schemaPasswordConfirmation,
} from 'utils/data/validation/yup-schema';
import styles from './password-changing.module.scss';

interface IPasswordChangingProps {
  onProfileTab: Dispatch<SetStateAction<boolean>>;
}

export const PasswordChanging: FC<IPasswordChangingProps> = ({
  onProfileTab,
}): ReactElement => {
  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirmation: '',
    },

    validationSchema: Yup.object()
      .shape(schemaPassword(Yup))
      .shape(schemaPasswordConfirmation(Yup)),

    onSubmit: (data, { setSubmitting }) => {
      changePassword(data).finally(() => setSubmitting(false));
    },
  });

  const {
    values,
    errors,
    isValid,
    isSubmitting,
    touched,
    setFieldTouched,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <>
      <Button
        extraClass={styles.userProfile_nav}
        label="Вернуться назад"
        model="tertiary"
        customIcon={<Icon icon="LeftArrowIcon" color="blue" />}
        onClick={() => onProfileTab(true)}
      />
      <form className={styles.userProfile_form} onSubmit={handleSubmit}>
        <h3 className={styles.userProfile_title}>Изменение пароля</h3>
        <div className={styles.userProfile_inputs}>
          <Input
            type="password"
            name="password"
            label="Новый пароль"
            icon
            value={values.password}
            error={errors?.password}
            touched={touched?.password}
            onFocus={() => setFieldTouched('password')}
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
            onFocus={() => setFieldTouched('password_confirmation')}
            onChange={handleChange}
          />
        </div>
        <Button
          extraClass={styles.userProfile_button}
          type="submit"
          label="Сохранить новый пароль"
          hasSpinner
          spinnerSize="small"
          spinnerColor="white"
          isLoading={isSubmitting}
          isDisabled={!isValid}
        />
      </form>
    </>
  );
};
