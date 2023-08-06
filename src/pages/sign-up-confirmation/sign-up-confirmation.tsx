import { FC, ReactElement, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Entry from 'components/entry/entry';
import { MailWithIcon } from 'shared/mail-with-icon/mail-with-icon';
import routes from 'utils/routes';
import styles from './sign-up-confirmation.module.scss';

export const SignUpConfirmationPage: FC = (): ReactElement => {
  const [responseStatus, setResponseStatus] = useState<boolean | undefined>(
    undefined
  );
  const navigate = useNavigate();
  const location = useLocation();

  const renderContent = () => {
    switch (responseStatus) {
      case true:
        return {
          content: <MailWithIcon hasStatusIcon statusIcon="success" />,
          heading: 'Email подтверждён',
          instruction: 'Для продолжения работы войдите в личный кабинет',
          buttonLabel: 'Войти в аккаунт',
          buttonType: 'button',
          onClick: () => navigate(routes.signin),
        };
      case false:
        return {
          content: <MailWithIcon hasStatusIcon statusIcon="fail" />,
          heading: 'В процессе подтверждения email произошла ошибка',
          instruction:
            'Попробуйте перейти по ссылке ещё раз или повторите регистрацию',
          buttonLabel: 'Вернуться к регистрации',
          buttonType: 'button',
          onClick: () => navigate(routes.signup),
        };
      default:
        return {
          content: <MailWithIcon hasStatusIcon statusIcon="loading" />,
          heading: 'Подтверждаем ваш email',
          instruction: 'Пожалуйста, подождите',
          buttonType: 'button',
        };
    }
  };

  const { content, heading, instruction, buttonLabel, buttonType, onClick } =
    renderContent();

  return (
    <Entry
      heading={heading}
      buttonType={buttonType as 'button'}
      buttonLabel={buttonLabel}
      onClick={onClick}
    >
      <>
        <p className={styles.subheading}>{instruction}</p>
        <div
          className={classNames(styles.content, {
            [styles[`content--response`]]:
              typeof responseStatus === 'undefined',
          })}
        >
          {content}
        </div>
      </>
    </Entry>
  );
};
