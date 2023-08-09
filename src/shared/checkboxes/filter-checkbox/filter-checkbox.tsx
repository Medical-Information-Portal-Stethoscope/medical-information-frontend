import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './filter-checkbox.module.scss';

interface IFilterCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  id: string;
  label: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
}

export default function FilterCheckbox({
  extraClass,
  id,
  label,
  isChecked = false,
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
        checked={isChecked}
        disabled={isDisabled}
        aria-label={isChecked ? 'Убрать фильтр' : 'Добавить'}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </>
  );
}
