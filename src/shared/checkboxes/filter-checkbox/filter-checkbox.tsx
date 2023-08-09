import React, { InputHTMLAttributes } from 'react';
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

const FilterCheckbox = React.forwardRef<HTMLInputElement, IFilterCheckboxProps>(
  (
    {
      extraClass,
      id,
      label,
      isChecked = false,
      isDisabled = false,
      onChange,
    }: IFilterCheckboxProps,
    ref
  ) => (
    <>
      <input
        className={classNames(styles.checkbox, extraClass)}
        id={id}
        ref={ref}
        type="checkbox"
        name={label}
        value={label}
        defaultChecked={isChecked}
        disabled={isDisabled}
        aria-label={isChecked ? 'Убрать фильтр' : 'Добавить'}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </>
  )
);
export default FilterCheckbox;
