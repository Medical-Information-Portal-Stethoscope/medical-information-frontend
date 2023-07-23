import { FC } from 'react';
import { ErrorPage } from '..';
import ServerErrorImg from '../../../assets/images/ServerError.svg';

export const ServerErrorPage: FC = () => {
  const message = <>Произошла ошибка, повторите попытку позже</>;
  const title = <>Ошибка сервера</>;

  return <ErrorPage title={title} message={message} img={ServerErrorImg} />;
};
