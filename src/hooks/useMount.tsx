/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { animationTime } from 'utils/constants';

interface IUseMount {
  isOpened?: boolean;
}

export const useMount = ({ isOpened }: IUseMount) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpened && !mounted) {
      setMounted(true);
    } else if (!isOpened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, animationTime);
    }
  }, [isOpened]);

  return {
    mounted,
  };
};
