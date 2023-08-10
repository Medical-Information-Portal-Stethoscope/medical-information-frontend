import { FC, ReactElement, ReactNode, ChangeEventHandler } from 'react';
import classNames from 'classnames';
import styles from './file-input.module.scss';

interface IFileInputProps {
  extraClass?: string;
  id: string;
  name: string;
  label: string;
  icon?: ReactNode;
  accept: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FileInput: FC<IFileInputProps> = ({
  extraClass,
  id,
  name,
  label,
  icon,
  accept,
  onChange,
}): ReactElement => (
  <div className={classNames(styles.fileWrapper, extraClass)}>
    <label className={styles.fileLabel} htmlFor={id}>
      {icon && icon}
      <span>{label}</span>
    </label>
    <input
      className={styles.file}
      id={id}
      type="file"
      name={name}
      accept={accept}
      onChange={onChange}
    />
  </div>
);
