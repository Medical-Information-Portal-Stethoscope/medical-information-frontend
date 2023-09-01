/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export const useToggleButtonVisible = (heightTop = 1250) => {
  const [isButtonToTopVisible, setIsButtonToTopVisible] = useState(false);

  const toggleButtonVisible = () => {
    setIsButtonToTopVisible(
      document.body.scrollTop > heightTop ||
        document.documentElement.scrollTop > heightTop
    );
  };
  return { isButtonToTopVisible, toggleButtonVisible };
};
