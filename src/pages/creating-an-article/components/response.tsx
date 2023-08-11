import { FC, ReactElement, ReactNode } from 'react';
import { MailWithIcon } from 'shared/mail-with-icon/mail-with-icon';
import styles from './response.module.scss';

interface IResponseProps {
  message: string;
  status: 'success' | 'fail';
  button: ReactNode;
}

export const Response: FC<IResponseProps> = ({
  message,
  status,
  button,
}): ReactElement => (
  <div className={styles.content}>
    <p className={styles.message}>{message}</p>
    <div className={styles.icon}>
      <MailWithIcon hasStatusIcon statusIcon={status} />
    </div>
    {button}
  </div>
);
