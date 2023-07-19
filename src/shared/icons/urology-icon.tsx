import React from 'react';
import { getColor, IIconProps } from './utils';

export const UrologyIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 23C9 22.5 9 20.975 9 20.975C8.58333 20.8917 8.225 20.704 7.925 20.412C7.625 20.12 7.43333 19.7577 7.35 19.325L7.025 17.325C6.925 16.7083 7.075 16.1667 7.475 15.7C7.875 15.2333 8.38333 15 9 15V13.825C8.83333 13.8917 8.67067 13.9377 8.512 13.963C8.35333 13.9883 8.18267 14.0007 8 14C6.33333 14 4.91667 13.4167 3.75 12.25C2.58333 11.0833 2 9.66667 2 8V7C2 5.33333 2.58333 3.91667 3.75 2.75C4.91667 1.58333 6.33333 1 8 1C8.83333 1 9.54167 1.29167 10.125 1.875C10.7083 2.45833 11 3.16667 11 4C11 4.83333 10.7083 5.54167 10.125 6.125C9.54167 6.70833 8.83333 7 8 7C8 7 7 7 6 7C5 7 5 5 6 5C7 5 8 5 8 5C8.28333 5 8.521 4.904 8.713 4.712C8.905 4.52 9.00067 4.28267 9 4C9 3.71667 8.904 3.479 8.712 3.287C8.52 3.095 8.28267 2.99933 8 3C6.9 3 5.95833 3.39167 5.175 4.175C4.39167 4.95833 4 5.9 4 7V8C4 9.1 4.39167 10.0417 5.175 10.825C5.95833 11.6083 6.9 12 8 12C8.28333 12 8.521 11.904 8.713 11.712C8.905 11.52 9.00067 11.2827 9 11C9 10.7167 8.904 10.479 8.712 10.287C8.52 10.095 8.28267 9.99933 8 10C8 10 7 10 6 10C5 10 5 8 6 8C7 8 8 8 8 8C8.83333 8 9.54167 8.29167 10.125 8.875C10.7083 9.45833 11 10.1667 11 11V15H13V11C13 10.1667 13.2917 9.45833 13.875 8.875C14.4583 8.29167 15.1667 8 16 8C16 8 17 8 18 8C19 8 19 10 18 10C17 10 16 10 16 10C15.7167 10 15.479 10.096 15.287 10.288C15.095 10.48 14.9993 10.7173 15 11C15 11.2833 15.096 11.521 15.288 11.713C15.48 11.905 15.7173 12.0007 16 12C17.1 12 18.0417 11.6083 18.825 10.825C19.6083 10.0417 20 9.1 20 8V7C20 5.9 19.6083 4.95833 18.825 4.175C18.0417 3.39167 17.1 3 16 3C15.7167 3 15.479 3.09567 15.287 3.287C15.095 3.47833 14.9993 3.716 15 4C15 4.28333 15.096 4.521 15.288 4.713C15.48 4.905 15.7173 5.00067 16 5C16 5 17 5 18 5C19 5 19 7 18 7C17 7 16 7 16 7C15.1667 7 14.4583 6.70833 13.875 6.125C13.2917 5.54167 13 4.83333 13 4C13 3.16667 13.2917 2.45833 13.875 1.875C14.4583 1.29167 15.1667 1 16 1C17.6667 1 19.0833 1.58333 20.25 2.75C21.4167 3.91667 22 5.33333 22 7V8C22 9.66667 21.4167 11.0833 20.25 12.25C19.0833 13.4167 17.6667 14 16 14C15.8167 14 15.6457 13.9873 15.487 13.962C15.3283 13.9367 15.166 13.891 15 13.825V15C15.6167 15 16.125 15.2333 16.525 15.7C16.925 16.1667 17.075 16.7083 16.975 17.325L16.65 19.325C16.5667 19.7583 16.375 20.121 16.075 20.413C15.775 20.705 15.4167 20.8923 15 20.975C15 20.975 15 22.2092 15 23C15 24 13 24 13 23C13 22 13 21 13 21H11C11 21 11 22 11 23C11 24 9 24 9 23ZM9 17L9.325 19H14.675L15 17H9Z" />
  </svg>
);
