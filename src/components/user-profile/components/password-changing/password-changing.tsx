import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import * as Yup from 'yup';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import { changePassword } from 'utils/api';
import {
  schemaPassword,
  schemaCurrentPassword,
} from 'utils/data/validation/yup-schema';
import { desktopMedium } from 'utils/constants';
import styles from './password-changing.module.scss';

interface IPasswordChangingProps {
  onProfileTab: Dispatch<SetStateAction<boolean>>;
}

export const PasswordChanging: FC<IPasswordChangingProps> = ({
  onProfileTab,
}) => {
  const [serverError, setServerError] = useState<null | {
    current_password: string[];
  }>(null);

  const isMediumScreenDevice = useWindowDimensions() <= desktopMedium;

  const formik = useFormik({
    initialValues: {
      password_current: '',
      password: '',
    },

    validationSchema: Yup.object()
      .shape(schemaCurrentPassword(Yup))
      .shape(schemaPassword(Yup)),

    onSubmit: (data, { setSubmitting }) => {
      changePassword(data)
        .catch((err) => setServerError(err))
        .finally(() => setSubmitting(false));
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

  useEffect(() => {
    if (!serverError) return;

    setServerError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

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
            name="password_current"
            label="Ваш текущий пароль"
            icon
            value={values.password_current}
            error={errors?.password_current}
            serverError={serverError?.current_password}
            touched={touched?.password_current}
            onFocus={() => setFieldTouched('password_current')}
            onChange={handleChange}
          />
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
        </div>
        <Button
          extraClass={styles.userProfile_button}
          type="submit"
          label="Сохранить новый пароль"
          size={isMediumScreenDevice ? 'small' : 'medium'}
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
