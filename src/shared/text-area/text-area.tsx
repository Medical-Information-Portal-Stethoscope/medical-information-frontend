import {
  useRef,
  useLayoutEffect,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import styles from './text-area.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  minHeight: number;
  value: string;
  label?: string;
  hasCounter?: boolean;
  maxSymbols?: number;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({
    name,
    label,
    value,
    minHeight,
    hasCounter,
    maxSymbols = 0,
    placeholder,
    autoComplete = 'off',
    error,
    onChange,
  }) => {
    const id = nanoid();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useLayoutEffect(() => {
      if (textareaRef?.current) {
        textareaRef.current.style.height = 'inherit';

        textareaRef.current.style.height = `${Math.max(
          textareaRef.current.scrollHeight,
          minHeight
        )}px`;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
      <div className={styles.textarea}>
        <label className={styles[`textarea--label`]} htmlFor={id}>
          {label}
          <textarea
            className={styles[`textarea--text`]}
            id={id}
            ref={textareaRef}
            value={value}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={onChange}
          />
        </label>
        {(hasCounter && (
          <span
            className={classNames(styles[`textarea--counter`], {
              [styles[`textarea--error`]]: value?.length > maxSymbols,
            })}
          >
            {`${value?.length}/${maxSymbols}`}
          </span>
        )) || <span className={styles[`textarea--error`]}>{error}</span>}
      </div>
    );
  }
);

export default TextArea;

// TODO: useMemo
