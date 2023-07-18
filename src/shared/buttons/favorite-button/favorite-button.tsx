import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './favorite-button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function FavoriteButton({
  extraClass,
  isSelected = false,
  isDisabled = false,
  onClick,
}: IButtonProps) {
  const iconBookmark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M10.768 5.89112C14.2255 5.31149 17.775 5.31149 21.2324 5.89112C21.8831 6.00021 22.3999 6.50011 22.5296 7.14402C23.7097 13.0027 23.7741 19.0313 22.7194 24.9138L22.5013 26.1301L17.6073 21.4807C16.7067 20.6252 15.2937 20.6252 14.3931 21.4807L9.49909 26.1301L9.28102 24.9138C8.22632 19.0313 8.29071 13.0027 9.47081 7.14402C9.60052 6.50011 10.1173 6.00021 10.768 5.89112Z"
        fill="none" // content
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2324 5.89112C17.775 5.31149 14.2255 5.31149 10.768 5.89112C10.1173 6.00021 9.60052 6.50011 9.47081 7.14402C8.29071 13.0027 8.22632 19.0313 9.28102 24.9138L9.49909 26.1301L14.3931 21.4807C15.2937 20.6252 16.7067 20.6252 17.6073 21.4807L22.5013 26.1301L22.7194 24.9138C23.7741 19.0313 23.7097 13.0027 22.5296 7.14402C22.3999 6.50011 21.8831 6.00021 21.2324 5.89112ZM10.4373 3.91865C14.1137 3.30231 17.8867 3.30231 21.5631 3.91865C23.0287 4.16436 24.1962 5.28944 24.4902 6.7491C25.72 12.8543 25.7871 19.1367 24.688 25.2668L24.3927 26.9139C24.1448 28.2963 22.4594 28.8489 21.4412 27.8816L16.2298 22.9307C16.1011 22.8085 15.8993 22.8085 15.7706 22.9307L10.5592 27.8816C9.54098 28.8489 7.8556 28.2963 7.60773 26.9139L7.31241 25.2668C6.21332 19.1367 6.28042 12.8543 7.51019 6.7491C7.80421 5.28945 8.97167 4.16436 10.4373 3.91865Z"
        fill="#fff" // border
      />
    </svg>
  );

  return (
    <button
      className={classNames(styles.button, extraClass, {
        [styles[`button--isSelected`]]: isSelected,
      })}
      type="button"
      aria-label={isSelected ? 'Убрать из избранных' : 'Добавить в избранное'}
      disabled={isDisabled}
      onClick={onClick}
    >
      {iconBookmark}
    </button>
  );
}
