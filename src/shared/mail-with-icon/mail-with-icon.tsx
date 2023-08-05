import { FC, ReactElement } from 'react';
import { StatusIcon } from 'shared/icons/status-icon';
import styles from './mail-with-icon.module.scss';

interface IMailWithIconProps {
  hasStatusIcon?: boolean;
  statusIcon?: 'success' | 'fail';
}

export const MailWithIcon: FC<IMailWithIconProps> = ({
  hasStatusIcon = false,
  statusIcon,
}): ReactElement => (
  <div className={styles.wrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="190"
      height="188"
      viewBox="0 0 190 188"
      fill="none"
    >
      <path
        d="M155.5 110V4.91143C155.5 3.30349 154.196 2 152.589 2H36.4114C34.8035 2 33.5 3.30349 33.5 4.91143V110"
        stroke="#ADA9BB"
        strokeWidth="4"
      />
      <rect
        x="59.5"
        y="26"
        width="18"
        height="2"
        rx="1"
        fill="#ADA9BB"
        stroke="#ADA9BB"
        strokeWidth="2"
      />
      <rect
        x="78.5"
        y="50"
        width="50"
        height="2"
        rx="1"
        fill="#ADA9BB"
        stroke="#ADA9BB"
        strokeWidth="2"
      />
      <rect
        x="59.5"
        y="73"
        width="68"
        height="2"
        rx="1"
        fill="#ADA9BB"
        stroke="#ADA9BB"
        strokeWidth="2"
      />
      <rect
        x="59.5"
        y="96"
        width="68"
        height="2"
        rx="1"
        fill="#ADA9BB"
        stroke="#ADA9BB"
        strokeWidth="2"
      />
      <path
        d="M2 87.5048V174C2 180.627 7.37258 186 14 186H176C182.627 186 188 180.627 188 174V87.5048M2 87.5048L52.1328 122.268M2 87.5048L29.5 68M188 87.5048L137.867 122.268M188 87.5048L159.5 68M30.3359 162.825L62.4409 131.476C64.6826 129.287 67.6914 128.062 70.8245 128.062H117.268C120.238 128.062 123.103 129.164 125.309 131.154L160.391 162.825"
        stroke="#014CFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {hasStatusIcon && (
      <StatusIcon color="white" size="96" status={statusIcon} />
    )}
  </div>
);
