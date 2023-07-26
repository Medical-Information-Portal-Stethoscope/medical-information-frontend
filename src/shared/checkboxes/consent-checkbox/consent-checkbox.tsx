import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './consent-checkbox.module.scss';

interface IConsentCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  children?: string | ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
}

export default function ConsentCheckbox({
  id,
  name,
  value,
  children,
  isChecked = false,
  isDisabled = false,
  onChange,
}: IConsentCheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.input}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
