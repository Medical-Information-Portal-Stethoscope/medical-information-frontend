import React from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';
import checkIcon from '../../assets/icons/check.svg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  error?: boolean;
  errorText?: string;
  isDisabled: boolean;
  extraClass?: string;
  isValid: boolean;
  format?: 'medium' | 'small';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = 'text',
      value,
      name,
      onChange,
      label,
      placeholder,
      error,
      errorText,
      isDisabled,
      extraClass,
      isValid,
      format,
    },
    ref
  ) => (
    <div className={classNames(extraClass, styles.input)}>
      <label
        className={classNames(styles[`input--label`], {
          [styles[`input--label--disabled`]]: isDisabled,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={classNames(
          styles[`input--container`],
          styles[`input--container--${format}`],
          {
            [styles[`input--container--success`]]: isValid,
            [styles[`input--container--error`]]: error && errorText,
            [styles[`input--container--disabled`]]: isDisabled,
          }
        )}
      >
        <input
          className={classNames(styles[`input--container--input`], {
            [styles[`input--container--input--error`]]: error && errorText,
          })}
          ref={ref}
          name={name}
          value={value}
          id={id}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
        />
        {isValid && <img src={checkIcon} alt="Success icon" />}
      </div>
      <span className={classNames(styles[`input--span`])}>
        {error ? errorText : ''}
      </span>
    </div>
  )
);

export default Input;
