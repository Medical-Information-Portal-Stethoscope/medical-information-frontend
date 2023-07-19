import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './filter-checkbox.module.scss';

interface IFilterCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  id: string;
  label: string;
  isDisabled?: boolean;
  onChange?: () => void;
}

export default function FilterCheckbox({
  extraClass,
  id,
  label,
  isDisabled = false,
  onChange,
}: IFilterCheckboxProps) {
  return (
    <>
      <input
        className={classNames(styles.checkbox, extraClass)}
        id={id}
        type="checkbox"
        name={label}
        value={label}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </>
  );
}
