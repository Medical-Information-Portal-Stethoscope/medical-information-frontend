/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import { Icon } from 'shared/icons';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from 'services/app/hooks';
import { resetServerError } from 'services/features/user/slice';
import classNames from 'classnames';
import styles from './input.module.scss';

interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
  extraClass?: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  serverError?: string[];
  size?: 'medium' | 'small';
  icon?: boolean;
  isDisabled?: boolean;
  isValid?: boolean;
  touched?: boolean;
  hasCheckmark?: boolean;
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
      error,
      serverError,
      isDisabled,
      touched,
      name,
      label,
      placeholder,
      extraClass,
      isValid,
      size = 'medium',
      icon,
      autoComplete = 'off',
      hasCheckmark = false,
      onFocus,
      onBlur,
      onChange,
    },
    forwardedRef
  ) => {
    const id = nanoid();
    const [visible, setVisible] = useState(false);
    const innerRef = useRef<HTMLInputElement>(null);
    const ref = useCombinedRefs<HTMLInputElement>(innerRef, forwardedRef);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (serverError) {
        dispatch(resetServerError());
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

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
            disabled={isValid}
          >
            <Icon
              // eslint-disable-next-line no-nested-ternary
              color={
                // eslint-disable-next-line no-nested-ternary
                !isValid
                  ? (error || serverError) && touched
                    ? 'red'
                    : 'blue'
                  : 'gray'
              }
              icon={visible ? 'EyeIcon' : 'EyeClosedIcon'}
              size="24"
            />
          </button>
        ) : null,
      [error, serverError, icon, isValid, onIconClick, visible, touched]
    );

    const typeForPassword = visible ? 'text' : 'password';

    return (
      <div className={classNames(extraClass, styles.input)}>
        <label
          className={classNames(styles[`input--label`], {
            [styles[`input--label--disabled`]]: isValid,
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
              [styles[`input--container--error`]]:
                (error || serverError) && touched,
              [styles[`input--container--disabled`]]: isValid,
            }
          )}
          onClick={onWrapperClick}
        >
          <input
            className={classNames(styles[`input--container--input`], {
              [styles[`input--container--input--error`]]:
                (error || serverError) && touched,
            })}
            ref={ref}
            name={name}
            value={value || ''}
            id={id}
            type={type === 'password' ? typeForPassword : type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            disabled={isDisabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
          />
          {iconToRender}
          {value && !error && hasCheckmark && touched && (
            <Icon color="green" icon="CheckIcon" size="24" />
          )}
        </div>
        <span className={classNames(styles[`input--span`])}>
          {(error || serverError) && touched ? error || serverError : ''}
        </span>
      </div>
    );
  }
);

export default Input;
