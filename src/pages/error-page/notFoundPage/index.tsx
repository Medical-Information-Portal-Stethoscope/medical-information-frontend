import { FC } from 'react';
import { ErrorPage } from '..';
import NotFoundImg from '../../../assets/images/NotFound.svg';

export const NotFoundPage: FC = () => {
  const message = (
    <>Страница была удалена, либо&nbsp;её&nbsp;не&nbsp;существует</>
  );
  const title = <>Страница не&nbsp;найдена</>;

  return <ErrorPage title={title} message={message} img={NotFoundImg} />;
};
