import { InputHTMLAttributes } from 'react';
import styles from './consent-checkbox.module.scss';

interface IConsentCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
}

export default function ConsentCheckbox({
  id,
  name,
  value,
  label,
  isChecked = false,
  isDisabled = false,
  onChange,
}: IConsentCheckboxProps) {
  return (
    <>
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
        {label}
      </label>
    </>
  );
}
