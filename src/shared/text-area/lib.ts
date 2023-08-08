/* eslint-disable prefer-destructuring */
import { useEffect } from 'react';

const useAutoResizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string | undefined
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = `auto`;
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value]);
};

export default useAutoResizeTextArea;
