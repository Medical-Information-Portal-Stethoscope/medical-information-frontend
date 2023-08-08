import { FC, ReactElement, ReactNode, ChangeEventHandler } from 'react';
import styles from './file-input.module.scss';

interface IFileInputProps {
  id: string;
  label: string;
  icon?: ReactNode;
  accept: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FileInput: FC<IFileInputProps> = ({
  id,
  label,
  icon,
  accept,
  onChange,
}): ReactElement => (
  <div className={styles.fileWrapper}>
    <label className={styles.fileLabel} htmlFor={id}>
      {icon && icon}
      <span>{label}</span>
    </label>
    <input
      className={styles.file}
      id={id}
      type="file"
      accept={accept}
      onChange={onChange}
    />
  </div>
);
