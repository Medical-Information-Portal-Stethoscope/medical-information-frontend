import { getColor, IIconProps } from './utils';

export const BigArrowIcon = ({ color, size = '80', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    stroke={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.41748 10.9787L72.7346 74.3409M72.7346 74.3409V13.5132M72.7346 74.3409H11.9502"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
