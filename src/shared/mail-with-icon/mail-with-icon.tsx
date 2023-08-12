import { FC, ReactElement } from 'react';
import { StatusIcon } from 'shared/icons/status-icon';
import styles from './mail-with-icon.module.scss';

interface IMailWithIconProps {
  hasStatusIcon?: boolean;
  statusIcon?: 'success' | 'fail' | 'loading';
}

export const MailWithIcon: FC<IMailWithIconProps> = ({
  hasStatusIcon = false,
  statusIcon,
}): ReactElement => {
  if (hasStatusIcon) {
    return (
      <div className={styles.wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="194"
          height="190"
          viewBox="0 0 194 190"
          fill="none"
        >
          <path
            d="M32.6455 4.91143C32.6455 2.19893 34.8917 0 37.6626 0H156.338C159.109 0 161.355 2.19892 161.355 4.91143V110H157.269V4.91143C157.269 4.40806 156.852 4 156.338 4H37.6626C37.1484 4 36.7315 4.40806 36.7315 4.91143V110H32.6455V4.91143Z"
            fill="#ADA9BB"
          />
          <path
            d="M60.2262 27C60.2262 25.8954 61.1408 25 62.2692 25H78.6132C79.7416 25 80.6563 25.8954 80.6563 27C80.6563 28.1046 79.7416 29 78.6132 29H62.2692C61.1408 29 60.2262 28.1046 60.2262 27Z"
            fill="#ADA9BB"
          />
          <path
            d="M81.6778 49C80.5494 49 79.6348 49.8954 79.6348 51C79.6348 52.1046 80.5494 53 81.6778 53H130.71C131.838 53 132.753 52.1046 132.753 51C132.753 49.8954 131.838 49 130.71 49H81.6778Z"
            fill="#ADA9BB"
          />
          <path
            d="M60.2262 74C60.2262 72.8954 61.1408 72 62.2692 72H129.689C130.817 72 131.732 72.8954 131.732 74C131.732 75.1046 130.817 76 129.689 76H62.2692C61.1408 76 60.2262 75.1046 60.2262 74Z"
            fill="#ADA9BB"
          />
          <path
            d="M62.2692 95C61.1408 95 60.2262 95.8954 60.2262 97C60.2262 98.1046 61.1408 99 62.2692 99H129.689C130.817 99 131.732 98.1046 131.732 97C131.732 95.8954 130.817 95 129.689 95H62.2692Z"
            fill="#ADA9BB"
          />
          <path
            d="M2 88.2597V176C2 182.627 7.37258 188 14 188H143.016M2 88.2597L53.2109 123.462M2 88.2597L30.6021 68.5042M192 88.2597L140.789 123.462M192 88.2597L163.398 68M192 88.2597V140.33M26.4922 164.532L63.9353 132.242C66.114 130.363 68.8952 129.329 71.7721 129.329H119.863C122.823 129.329 125.679 130.424 127.882 132.402L140.789 143.997"
            stroke="#014CFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <StatusIcon color="white" size="96" status={statusIcon} />
      </div>
    );
  }

  return (
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
    </div>
  );
};
