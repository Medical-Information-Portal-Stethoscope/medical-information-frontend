import { getColor, IIconProps } from './utils';

export const PaperClipIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1714 3.41422C14.7335 1.85212 17.2662 1.85212 18.8283 3.41422C20.3904 4.97632 20.3904 7.50897 18.8283 9.07107L9.98945 17.9099C9.01314 18.8862 7.43022 18.8862 6.45391 17.9099C5.4776 16.9336 5.4776 15.3507 6.45391 14.3744L15.2927 5.53554C15.6833 5.14501 16.3164 5.14501 16.707 5.53554C17.0975 5.92606 17.0975 6.55923 16.707 6.94975L7.86813 15.7886C7.67286 15.9838 7.67286 16.3004 7.86813 16.4957C8.06339 16.691 8.37997 16.691 8.57523 16.4957L17.4141 7.65686C18.1951 6.87581 18.1951 5.60948 17.4141 4.82843C16.633 4.04738 15.3667 4.04738 14.5856 4.82843L5.74681 13.6673C4.37997 15.0341 4.37997 17.2502 5.74681 18.617C7.11364 19.9838 9.32972 19.9838 10.6966 18.617L19.7927 9.52082C20.1833 9.1303 20.8164 9.1303 21.207 9.52082C21.5975 9.91134 21.5975 10.5445 21.207 10.935L12.1108 20.0312C9.96288 22.1791 6.48048 22.1791 4.33259 20.0312C2.18471 17.8833 2.18471 14.4009 4.33259 12.2531L13.1714 3.41422Z"
      fill={getColor(color)}
    />
  </svg>
);
