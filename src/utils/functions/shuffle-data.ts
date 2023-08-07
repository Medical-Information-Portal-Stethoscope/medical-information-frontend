import { ReactNode } from 'react';

type TData = {
  readonly id: string;
  readonly icon: ReactNode;
  readonly heading: string;
}[];

const shuffleData = (data: TData, maxNum: number): TData => {
  const copy = [...data];

  for (let i = 0; i < data.length; i += 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, maxNum);
};

export default shuffleData;
