import { FC, ReactElement } from 'react';
import { Icon, TIcons } from 'shared/icons';
import { TIconColor } from 'shared/icons/utils';
import styles from './file-input.module.scss';

interface IFileInputProps {
  id: string;
  label: string;
  accept: string;
  icon: TIcons;
  color: TIconColor;
}

export const FileInput: FC<IFileInputProps> = ({
  id,
  label,
  accept,
  icon,
  color,
}): ReactElement => (
  <div className={styles.fileWrapper}>
    <label className={styles.fileLabel} htmlFor={id}>
      <Icon icon={icon} color={color} />
      <span>{label}</span>
    </label>
    <input className={styles.file} id={id} type="file" accept={accept} />
  </div>
);
