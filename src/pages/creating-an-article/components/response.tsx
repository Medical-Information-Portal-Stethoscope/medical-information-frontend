import { FC, ReactNode } from 'react';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { MailWithIcon } from 'shared/mail-with-icon/mail-with-icon';
import { StatusIcon } from 'shared/icons/status-icon';
import { tabletAlbumOrientation } from 'utils/constants';
import styles from './response.module.scss';

interface IResponseProps {
  message: string;
  status: 'success' | 'fail';
  button: ReactNode;
}

export const Response: FC<IResponseProps> = ({ message, status, button }) => {
  const isSmallScreenDevice = useWindowDimensions() <= tabletAlbumOrientation;

  return (
    <div className={styles.content}>
      <div className={styles.contentMessage}>
        <p className={styles.message}>{message}</p>
        <div className={styles.icon}>
          {isSmallScreenDevice ? (
            <StatusIcon color="white" status={status} />
          ) : (
            <MailWithIcon hasStatusIcon statusIcon={status} />
          )}
        </div>
      </div>
      {button}
    </div>
  );
};
