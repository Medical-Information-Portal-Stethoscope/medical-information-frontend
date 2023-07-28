/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Icon } from 'shared/icons';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import styles from './input.module.scss';

// TODO: зеленая галочка

interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
  type?: 'text' | 'email' | 'password';
  value?: string; // TODO: Сделал пока value и onChange необязательными, поскольку, если будем пользоваться формиком, у него это все под капотом
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
  autoComplete?: 'on' | 'off';
  formik?: any;
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
      label,
      placeholder,
      extraClass,
      isValid,
      size = 'medium',
      icon,
      autoComplete = 'off',
      formik,
    },
    forwardedRef
  ) => {
    const id = nanoid();
    const [visible, setVisible] = useState(false);
    const innerRef = useRef<HTMLInputElement>(null);
    const ref = useCombinedRefs<HTMLInputElement>(innerRef, forwardedRef);
    const { errors, touched } = formik;

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
                  ? errors[name] && touched[name]
                    ? 'red'
                    : 'blue'
                  : 'gray'
              }
              icon={visible ? 'EyeIcon' : 'EyeClosedIcon'}
              size="24"
            />
          </button>
        ) : null,
      [errors, icon, isValid, onIconClick, visible]
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
                errors[name] && touched[name],
              [styles[`input--container--disabled`]]: isValid,
            }
          )}
          onClick={onWrapperClick}
        >
          <input
            className={classNames(styles[`input--container--input`], {
              [styles[`input--container--input--error`]]:
                errors[name] && touched[name],
            })}
            ref={ref}
            name={name}
            defaultValue={value}
            id={id}
            type={type === 'password' ? typeForPassword : type}
            {...formik.getFieldProps({ name })}
            autoComplete={autoComplete}
            placeholder={placeholder}
            disabled={isValid}
          />
          {iconToRender}
          {isValid && !errors[name] && type !== 'password' && (
            <Icon color="green" icon="CheckIcon" size="24" />
          )}
        </div>
        <span className={classNames(styles[`input--span`])}>
          {errors[name] && touched[name] ? errors[name] : ''}
        </span>
      </div>
    );
  }
);

export default Input;
