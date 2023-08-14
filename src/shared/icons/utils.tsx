import React from 'react';

export type TIconColor =
  | 'black'
  | 'gray'
  | 'blue'
  | 'lightBlue'
  | 'white'
  | 'green'
  | 'red';

export const getColor = (color: TIconColor) => {
  switch (color) {
    case 'white':
      return '#ffffff';
    case 'black':
      return '#000000';
    case 'gray':
      return '#838090';
    case 'blue':
      return '#014CFF';
    case 'lightBlue':
      return '#4F8BFF';
    case 'green':
      return '#34C759';
    case 'red':
      return '#FF3B30';
    default:
      // eslint-disable-next-line no-case-declarations, @typescript-eslint/no-unused-vars
      const exhaustiveCheck: never = color;
      return '#212226';
  }
};

export interface IIconProps<T = '32'> {
  color: TIconColor;
  size?: T | '16' | '24' | '32' | '80' | '96' | '140';
  status?: 'success' | 'fail' | 'loading';
  className?: string;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void);
}
