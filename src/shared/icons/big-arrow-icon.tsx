import React from 'react';
import { getColor, IIconProps } from './utils';

export const BigArrowIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.41748 10.9787L72.7346 74.3409M72.7346 74.3409V13.5132M72.7346 74.3409H11.9502" />
  </svg>
);
