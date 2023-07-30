import { InputHTMLAttributes, ChangeEvent, FC, ReactElement } from 'react';
import styles from './consent-checkbox.module.scss';

interface IConsentCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const ConsentCheckbox: FC<IConsentCheckboxProps> = ({
  id,
  name,
  isChecked = false,
  isDisabled = false,
  onChange,
}): ReactElement => (
  <label className={styles.label} htmlFor={id}>
    <input
      className={styles.input}
      id={id}
      type="checkbox"
      name={name}
      defaultChecked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
    <span className={styles.checkmark} />
  </label>
);
