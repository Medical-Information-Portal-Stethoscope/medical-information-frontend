import React from 'react';
import { getColor, IIconProps } from './utils';

export const EclipsedIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.9998 2.66666C15.0399 2.67031 14.0832 2.7776 13.1464 2.98666H12.9864C10.0751 3.67446 7.47971 5.3213 5.61746 7.66238C3.75521 10.0035 2.73431 12.9028 2.71893 15.8942C2.70354 18.8856 3.69455 21.7952 5.53262 24.1554C7.37069 26.5155 9.94903 28.1889 12.8531 28.9067H13.0398C14.0063 29.1644 14.9998 29.3076 15.9998 29.3333C19.536 29.3333 22.9274 27.9286 25.4278 25.4281C27.9283 22.9276 29.3331 19.5362 29.3331 16C29.3331 12.4638 27.9283 9.07238 25.4278 6.5719C22.9274 4.07141 19.536 2.66666 15.9998 2.66666ZM13.3331 26.32C11.0504 25.7234 9.02999 24.3868 7.58796 22.5194C6.14594 20.6521 5.36371 18.3593 5.36371 16C5.36371 13.6407 6.14594 11.3479 7.58796 9.48053C9.02999 7.61317 11.0504 6.2766 13.3331 5.67999C15.6157 6.2766 17.6362 7.61317 19.0782 9.48053C20.5202 11.3479 21.3025 13.6407 21.3025 16C21.3025 18.3593 20.5202 20.6521 19.0782 22.5194C17.6362 24.3868 15.6157 25.7234 13.3331 26.32ZM19.3731 26.1067C20.8277 24.8549 21.995 23.304 22.7952 21.5597C23.5954 19.8155 24.0097 17.919 24.0097 16C24.0097 14.0809 23.5954 12.1845 22.7952 10.4402C21.995 8.696 20.8277 7.14503 19.3731 5.89332C21.4879 6.60701 23.3255 7.9661 24.6272 9.77919C25.9289 11.5923 26.629 13.768 26.629 16C26.629 18.232 25.9289 20.4077 24.6272 22.2208C23.3255 24.0339 21.4879 25.393 19.3731 26.1067Z" />
  </svg>
);
