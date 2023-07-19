import { InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './filter-tab.module.scss';

interface IFilterTabProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  id: string;
  label: string;
  icon: ReactNode; // icon should be a svg
  onChange?: () => void;
}

export default function FilterTab({
  extraClass,
  id,
  label,
  icon,
  onChange,
}: IFilterTabProps) {
  return (
    <>
      <input
        className={classNames(styles.checkbox, extraClass)}
        id={id}
        type="checkbox"
        name={label}
        value={label}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {icon}
        {label}
      </label>
    </>
  );
}
