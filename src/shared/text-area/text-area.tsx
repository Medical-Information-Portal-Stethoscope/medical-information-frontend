/* eslint-disable arrow-body-style */
import React, { useRef, useMemo, useImperativeHandle } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import styles from './text-area.module.scss';
import useAutoResizeTextArea from './lib';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  size?: string;
  maxTextAreaLength?: number;
  counter?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      label,
      value,
      onChange,
      size,
      maxTextAreaLength,
      counter,
      placeholder,
      ...props
    },
    forwardRef
  ) => {
    const id = nanoid();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutoResizeTextArea(textAreaRef.current, value);

    useImperativeHandle(
      forwardRef,
      () => textAreaRef.current as HTMLTextAreaElement
    );

    const symbols = useMemo(
      () =>
        // eslint-disable-next-line no-nested-ternary
        value ? (value.length <= 400 ? 0 + value.length : '400') : '0',
      [value]
    );

    return (
      <div className={classNames(styles.textarea)}>
        <label className={classNames(styles[`textarea--label`])} htmlFor={id}>
          {label}
          <textarea
            className={classNames(
              styles[`textarea--text`],
              styles[`textarea--text--${size}`]
            )}
            id={id}
            ref={textAreaRef}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            rows={1}
            maxLength={maxTextAreaLength}
            autoComplete="on"
            required
            {...props}
          />
        </label>
        <p
          className={classNames(styles[`textarea--counter`], {
            [styles[`textarea--counter--error`]]: value?.length >= 400,
          })}
        >
          {counter ? `${symbols}/400` : ''}
        </p>
      </div>
    );
  }
);

export default TextArea;
