import { FC, ReactElement } from 'react';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import styles from './personal-data.module.scss';

interface IPersonalDataProps {
  name?: string;
  lastName?: string;
}

export const PersonalData: FC<IPersonalDataProps> = ({
  name,
  lastName,
}): ReactElement => (
  <form className={styles.userProfile_form}>
    <h4 className={styles.userProfile_title}>Личные данные</h4>
    <div className={styles.userProfile_inputs}>
      <Input label="Имя" size="small" value={name} />
      <Input label="Фамилия" size="small" value={lastName} />
    </div>
    <Button type="submit" label="Сохранить" size="small" />
  </form>
);
