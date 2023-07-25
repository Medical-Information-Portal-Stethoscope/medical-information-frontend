import Button from 'shared/buttons/button/button';
import styles from './tooltip.module.scss';

const Tooltip = () => (
  <div className={styles.tooltip}>
    <svg
      className={styles.tip}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C13 0 15.9999 8 20 8H0C3.9749 8 7 0 10 0Z"
        fill="#F4F4F4"
      />
    </svg>
    <Button
      label="Зарегистрироваться"
      model="primary"
      // onClick={function noRefCheck() { }}
      size="small"
      type="button"
    />
    <Button
      extraClass={styles.button}
      label="Войти"
      model="secondary"
      // onClick={function noRefCheck() { }}
      size="small"
      type="button"
    />
  </div>
);

export default Tooltip;
