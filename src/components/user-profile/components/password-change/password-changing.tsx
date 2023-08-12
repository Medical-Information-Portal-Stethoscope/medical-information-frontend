import { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import Input from 'shared/input/input';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import styles from './password-changing.module.scss';

interface IPasswordChangingProps {
  onProfileTab: Dispatch<SetStateAction<boolean>>;
}

export const PasswordChanging: FC<IPasswordChangingProps> = ({
  onProfileTab,
}): ReactElement => (
  <>
    <Button
      extraClass={styles.userProfile_nav}
      label="Вернуться назад"
      model="tertiary"
      customIcon={<Icon icon="LeftArrowIcon" color="blue" />}
      onClick={() => onProfileTab(true)}
    />
    <form className={styles.userProfile_form}>
      <h3 className={styles.userProfile_title}>Изменение пароля</h3>
      <div className={styles.userProfile_inputs}>
        <Input
          type="password"
          name="password"
          label="Новый пароль"
          icon
          // value={values.password}
          // error={errors?.password}
          // serverError={serverError?.password}
          // touched={touched?.password}
          // onBlur={handleBlur}
          // onChange={handleChange}
        />
        <Input
          type="password"
          name="password_confirmation"
          label="Повторите новый пароль"
          icon
          // value={values.password_confirmation}
          // error={errors?.password_confirmation}
          // touched={touched?.password_confirmation}
          // onBlur={handleBlur}
          // onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        label="Сохранить новый пароль"
        extraClass={styles.userProfile_button}
        // isLoading={isLoading}
        // isDisabled={isDisabled}
      />
    </form>
  </>
);
