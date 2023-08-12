import { InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './filter-tab.module.scss';

interface IFilterTabProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  id: string;
  label: string;
  icon: ReactNode; // icon should be a svg
  isChecked?: boolean;
  onChange?: () => void;
}

export default function FilterTab({
  extraClass,
  id,
  label,
  icon,
  isChecked = false,
  onChange,
  name,
}: IFilterTabProps) {
  return (
    <>
      <input
        className={classNames(styles.checkbox, extraClass)}
        id={id}
        type="radio"
        name={name}
        value={label}
        defaultChecked={isChecked}
        aria-label={isChecked ? 'Убрать фильтр' : 'Добавить фильтр'}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {icon}
        {label}
      </label>
    </>
  );
}
