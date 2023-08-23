import {
  FC,
  ReactElement,
  useState,
  useEffect,
  ChangeEvent,
  useRef,
} from 'react';
import { useAppDispatch } from 'services/app/hooks';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { FileInput } from 'shared/file-input/file-input';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import { Icon } from 'shared/icons';
import Button from 'shared/buttons/button/button';
import {
  animationTime,
  bytesInKilobyte,
  bytesInMegabyte,
} from 'utils/constants';
import { changeUserAvatar } from 'services/features/user/api';
import { TErrorResponse } from 'services/features/user/types';
import { CSSTransition } from 'react-transition-group';
import animation from './animation.module.scss';
import styles from './avatar-modal.module.scss';

const avatarSizeLimitKb = 200;
const avatarSizeLimitBytes = avatarSizeLimitKb * bytesInKilobyte;

const avatarWidthLimit = 500;
const avatarHeightLimit = 500;

interface IAvatarModalProps {
  avatar?: string | null;
  serverError: TErrorResponse | null;
  onClose: () => void;
  isOpened?: boolean;
}

export const AvatarModal: FC<IAvatarModalProps> = ({
  avatar,
  serverError,
  onClose,
  isOpened,
}): ReactElement => {
  const dispatch = useAppDispatch();

  const [selectedImage, setSelectedImage] = useState<
    null | string | ArrayBuffer
  >(null);
  const [selectedImageDetails, setSelectedImageDetails] = useState<null | Blob>(
    null
  );
  const [selectedImageErrors, setSelectedImageErrors] = useState<{
    size: number | null;
    width: number | null;
    height: number | null;
  }>({ size: null, width: null, height: null });

  // Анимация открытия и закрытия попапа с аватаром
  const avatarRef = useRef(null);
  const [animationIn, setAnimationIn] = useState<boolean | undefined>(false);
  const avatarModalAnimation = {
    enter: animation.avatarModalEnter,
    enterActive: animation.avatarModalEnterActive,
    exit: animation.avatarModalExit,
    exitActive: animation.avatarModalExitActive,
  };
  useEffect(() => {
    setAnimationIn(isOpened);
  }, [isOpened]);

  useEffect(() => {
    if (!selectedImage || !selectedImageDetails) return;

    const objectUrl = URL.createObjectURL(selectedImageDetails);
    const imageObj = new Image();

    imageObj.src = objectUrl;
    imageObj.onload = () => {
      const { size } = selectedImageDetails;
      const { height, width } = imageObj;

      let errorSize: null | number = null;
      let errorWidth: null | number = null;
      let errorHeight: null | number = null;

      if (size > avatarSizeLimitBytes) {
        errorSize = size;
      }

      if (width > avatarWidthLimit) {
        errorWidth = width;
      }

      if (height > avatarHeightLimit) {
        errorHeight = height;
      }

      if (errorSize || errorWidth || errorHeight) {
        setSelectedImageErrors({
          size: errorSize,
          width: errorWidth,
          height: errorHeight,
        });
      } else {
        const token = localStorage.getItem('auth_token');

        if (!token) return;

        dispatch(
          changeUserAvatar({
            token,
            avatar: selectedImage,
          })
        ).then((res) => {
          if (res.type.endsWith('fulfilled')) {
            onClose();
          }
        });
      }
    };

    // eslint-disable-next-line consistent-return
    return () => URL.revokeObjectURL(objectUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, selectedImageDetails]);

  const selectAvatar = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = !evt.target.files ? null : evt.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setSelectedImage(reader.result);
      setSelectedImageDetails(file);
    };
  };

  const deleteAvatar = () => {
    const token = localStorage.getItem('auth_token');

    if (!token) return;

    dispatch(
      changeUserAvatar({
        token,
        avatar: '',
      })
    );
  };

  const renderPlacematContent = () => {
    if (
      avatar &&
      Object.values(selectedImageErrors).every((err) => !err) &&
      !serverError
    ) {
      return (
        <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
      );
    }

    if (serverError) {
      return (
        <p className={styles.rule}>
          Что-то пошло не так. Попробуйте повторить ещё раз
        </p>
      );
    }

    if (selectedImageErrors?.size) {
      return (
        <p className={styles.rule}>
          {`Размер изображения не должен превышать ${avatarSizeLimitKb} Кб. Текущий размер: ${(
            selectedImageErrors.size / bytesInMegabyte
          )
            .toFixed(2)
            .replace(/\./, ',')} Мб`}
        </p>
      );
    }

    if (selectedImageErrors?.width || selectedImageErrors?.height) {
      return (
        <p className={styles.rule}>
          {`Уменьшите изображение. Максимальное разрешение ${avatarWidthLimit}x${avatarHeightLimit}.`}
        </p>
      );
    }

    return (
      <p className={styles.rule}>
        {`Максимальное разрешение  изображения ${avatarWidthLimit}х${avatarHeightLimit}.\nРазмер файла до ${avatarSizeLimitKb} Кб.`}
      </p>
    );
  };

  return (
    <CSSTransition
      in={animationIn}
      nodeRef={avatarRef}
      mountOnEnter
      unmountOnExit
      timeout={animationTime}
      classNames={avatarModalAnimation}
    >
      <div ref={avatarRef} className={styles.wrapper}>
        <h3 className={styles.heading}>Фото профиля</h3>
        <div
          className={classNames(styles.placemat, {
            [styles['placemat--error']]:
              !Object.values(selectedImageErrors).every((err) => !err) ||
              serverError,
          })}
        >
          {renderPlacematContent()}
        </div>
        <div className={(avatar && styles.action) || ''}>
          <FileInput
            id={nanoid()}
            name="avatar"
            label={avatar ? 'Сменить' : 'Добавить фото'}
            accept=".jpg, .jpeg, .png"
            onChange={selectAvatar}
          />
          {avatar && (
            <Button label="Удалить" model="tertiary" onClick={deleteAvatar} />
          )}
        </div>
        <ButtonWithIcon
          extraClass={styles.closeButton}
          icon={<Icon color="blue" icon="CloseIcon" />}
          hasBackground={false}
          ariaLabel="Закрыть модальное окно"
          onClick={onClose}
        />
      </div>
    </CSSTransition>
  );
};
