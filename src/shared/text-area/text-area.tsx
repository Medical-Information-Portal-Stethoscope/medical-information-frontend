import {
  useRef,
  useLayoutEffect,
  TextareaHTMLAttributes,
  FC,
  ReactElement,
} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import styles from './text-area.module.scss';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  minHeight: number;
  value: string;
  label?: string;
  hasCounter?: boolean;
  maxSymbols?: number;
  error?: string;
  touched?: boolean;
}

const TextArea: FC<ITextAreaProps> = ({
  name,
  label,
  value,
  minHeight,
  hasCounter,
  maxSymbols = 0,
  placeholder,
  autoComplete = 'off',
  error,
  touched,
  rows = 1,
  onFocus,
  onBlur,
  onChange,
}): ReactElement => {
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
  }, [value, minHeight, rows]);

  return (
    <div className={styles.textarea}>
      <label className={styles[`textarea--label`]} htmlFor={id}>
        {label}
        <textarea
          className={classNames(styles[`textarea--text`], {
            [styles[`textarea--error`]]: touched && error,
            [styles[`textarea--error--border`]]: touched && error,
          })}
          id={id}
          ref={textareaRef}
          value={value}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          rows={rows}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
      </label>

      <div
        className={classNames(styles[`textarea--errorWrapper`], {
          [styles[`textarea--errorWrapper--two`]]: touched && error,
        })}
      >
        {touched && error && (
          <span className={styles[`textarea--error`]}>{error}</span>
        )}
        {hasCounter && (
          <span
            className={classNames(styles[`textarea--counter`], {
              [styles[`textarea--error`]]: value?.length > maxSymbols,
            })}
          >
            {`${value?.length}/${maxSymbols}`}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextArea;
