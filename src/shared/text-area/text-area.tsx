/* eslint-disable arrow-body-style */
import React, { useState, useRef, useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import styles from './text-area.module.scss';
import useAutoResizeTextArea from './lib';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  size?: 'medium' | 'large';
  maxTextAreaLength?: 400 | typeof Infinity;
  counter?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { name, label, size, maxTextAreaLength, counter, placeholder, ...props },
    ref
  ) => {
    const id = nanoid();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState('');

    useAutoResizeTextArea(textAreaRef.current, value);

    const symbols = useMemo(
      () =>
        // eslint-disable-next-line no-nested-ternary
        value ? (value.length <= 400 ? 0 + value.length : '400') : '0',
      [value]
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaValue = e.target?.value;
      setValue(textareaValue);
    };

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
            onChange={handleChange}
            placeholder={placeholder}
            rows={1}
            maxLength={maxTextAreaLength}
            autoComplete="on"
            required
            {...props}
          />
        </label>
        <p className={classNames(styles[`textarea--counter`])}>
          {counter ? `${symbols}/400` : ''}
        </p>
      </div>
    );
  }
);

export default TextArea;
