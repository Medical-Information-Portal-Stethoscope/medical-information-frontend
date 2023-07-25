/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Icon } from 'shared/icons';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import styles from './input.module.scss';

interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
  type?: 'text' | 'email' | 'password';
  value: string;
  name: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  isDisabled?: boolean;
  extraClass?: string;
  isValid?: boolean;
  size?: 'medium' | 'small';
  icon?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

function useCombinedRefs<T = HTMLElement>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.MutableRefObject<T | null> {
  const targetRef = React.useRef<T>(null);
  React.useEffect(() => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      size = 'medium',
      icon,
    },
    forwardedRef
  ) => {
    const id = nanoid();
    const [visible, setVisible] = useState(false);
    const innerRef = useRef<HTMLInputElement>(null);
    const ref = useCombinedRefs<HTMLInputElement>(innerRef, forwardedRef);

    const forceFocus = useCallback(() => {
      ref?.current?.focus();
    }, [ref]);

    const onWrapperClick = useCallback(() => {
      forceFocus();
    }, [forceFocus]);

    const onIconClick = useCallback(() => setVisible(!visible), [visible]);

    const iconToRender = useMemo(
      () =>
        icon ? (
          <button
            onClick={onIconClick}
            className={styles.icon_button}
            type="button"
            aria-label={visible ? 'скрыть пароль' : 'показать пароль'}
            disabled={isDisabled}
          >
            <Icon
              // eslint-disable-next-line no-nested-ternary
              color={!isDisabled ? (error ? 'red' : 'blue') : 'gray'}
              icon={visible ? 'EyeIcon' : 'EyeClosedIcon'}
              size="24"
            />
          </button>
        ) : null,
      [error, icon, isDisabled, onIconClick, visible]
    );

    const typeForPassword = visible ? 'text' : 'password';

    return (
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
            styles[`input--container--${size}`],
            {
              [styles[`input--container--success`]]: isValid,
              [styles[`input--container--error`]]: error && errorText,
              [styles[`input--container--disabled`]]: isDisabled,
            }
          )}
          onClick={onWrapperClick}
        >
          <input
            className={classNames(styles[`input--container--input`], {
              [styles[`input--container--input--error`]]: error && errorText,
            })}
            ref={ref}
            name={name}
            value={value}
            id={id}
            type={type === 'password' ? typeForPassword : type}
            onChange={onChange}
            placeholder={placeholder}
            disabled={isDisabled}
          />
          {iconToRender}
          {isValid && !error && type !== 'password' && (
            <Icon color="green" icon="CheckIcon" size="24" />
          )}
        </div>
        <span className={classNames(styles[`input--span`])}>
          {error ? errorText : ''}
        </span>
      </div>
    );
  }
);

export default Input;
