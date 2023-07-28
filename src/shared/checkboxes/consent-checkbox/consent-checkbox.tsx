import {
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
  FC,
  ReactElement,
} from 'react';
import styles from './consent-checkbox.module.scss';

interface IConsentCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  children?: string | ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const ConsentCheckbox: FC<IConsentCheckboxProps> = ({
  id,
  name,
  children,
  isChecked = false,
  isDisabled = false,
  onChange,
}): ReactElement => (
  <div className={styles.checkbox}>
    <input
      className={styles.input}
      id={id}
      type="checkbox"
      name={name}
      defaultChecked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  </div>
);
