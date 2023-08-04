import { FC, ReactElement, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import Entry from 'components/entry/entry';
import Input from 'shared/input/input';
import {
  schemaPassword,
  schemaPasswordConfirmation,
} from 'utils/data/validation/yup-schema';
import { StatusIcon } from 'shared/icons/status-icon';
import { resetPasswordConfirmation } from 'utils/api';
import { filterFormValues } from 'utils/functions/filter-form-values';
import routes from 'utils/routes';
import styles from './reset-password-confirmation.module.scss';

export const ResetPasswordConfirmationPage: FC = (): ReactElement => {
  const [responseStatus, setResponseStatus] = useState<boolean | undefined>(
    undefined
  );

  const navigate = useNavigate();
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
      resetPasswordConfirmation(uid, token, filterFormValues(values))
        .then(() => setResponseStatus(true))
        .catch(() => setResponseStatus(false))
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
      <Input
        type="password"
        name="password"
        label="Новый пароль"
        icon
        value={values.password}
        error={errors?.password}
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
    </>
  );

  const renderContent = () => {
    switch (responseStatus) {
      case true:
        return {
          content: <StatusIcon color="white" size="140" status="success" />,
          heading: 'Пароль успешно изменён',
          buttonLabel: 'Войти в личный кабинет',
          buttonType: 'button',
          onClick: () => navigate(routes.signin),
        };
      case false:
        return {
          content: <StatusIcon color="white" size="140" status="fail" />,
          heading: 'При сохранении пароля произошла ошибка',
          buttonLabel: 'Перейти к изменению пароля',
          buttonType: 'button',
          onClick: () => setResponseStatus(undefined),
        };
      default:
        return {
          content: initialState,
          heading: 'Придумайте новый пароль',
          buttonLabel: 'Сохранить новый пароль',
          buttonType: 'submit',
        };
    }
  };

  const { heading, content, buttonLabel, buttonType, onClick } =
    renderContent();

  return (
    <Entry
      heading={heading}
      buttonLabel={buttonLabel}
      buttonType={buttonType as 'button' | 'submit'}
      isLoading={isSubmitting}
      isDisabled={!isValid}
      onClick={onClick}
      onSubmit={handleSubmit}
    >
      <div
        className={classNames(styles.content, {
          [styles[`content--response`]]: typeof responseStatus !== 'undefined',
        })}
      >
        {content}
      </div>
    </Entry>
  );
};
