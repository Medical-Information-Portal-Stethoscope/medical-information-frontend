import { getColor, IIconProps } from './utils';

export const SocialTelegramIcon = ({
  color,
  size = '80',
  ...props
}: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 18"
    fill="none"
    {...props}
  >
    <path
      d="M19 1.10223L15.9946 16.7923C15.9946 16.7923 15.5741 17.8801 14.4189 17.3584L7.48458 11.8526L7.45242 11.8364C8.38909 10.9654 15.6524 4.20266 15.9698 3.89612C16.4613 3.42136 16.1562 3.13873 15.5856 3.49736L4.85679 10.553L0.717638 9.11077C0.717638 9.11077 0.0662573 8.87083 0.00359284 8.34911C-0.0598962 7.82653 0.739076 7.5439 0.739076 7.5439L17.6131 0.688948C17.6131 0.688948 19 0.05793 19 1.10223Z"
      fill={getColor(color)}
    />
  </svg>
);
