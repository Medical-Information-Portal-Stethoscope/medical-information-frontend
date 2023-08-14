/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useMount } from 'hooks/useMount';
import classNames from 'classnames';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition } from 'react-transition-group';
import { animationTime } from 'utils/constants';
import Portal from '../portal';
import styles from './overlaying-popup.module.scss';
import animation from './animation.module.scss';

interface OverlayingPopupProps {
  children?: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
  extClassName?: string;
}

const overlayAnimation = {
  enter: animation.overlayEnter,
  enterActive: animation.overlayEnterActive,
  exit: animation.overlayExit,
  exitActive: animation.overlayExitActive,
};

export const OverlayingPopup = ({
  children,
  onClose,
  isOpened,
  extClassName,
}: OverlayingPopupProps) => {
  const { mounted } = useMount({ isOpened });
  const overlayRef = useRef(null);
  const [animationIn, setAnimationIn] = useState<boolean | undefined>(false);

  useEffect(() => {
    setAnimationIn(isOpened);
  }, [isOpened]);

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(styles.popup, extClassName)}
        role="dialog"
        id="label"
      >
        <CSSTransition
          in={animationIn}
          nodeRef={overlayRef}
          timeout={animationTime}
          mountOnEnter
          unmountOnExit
          classNames={overlayAnimation}
        >
          <div
            className={classNames(styles.overlay)}
            role="button"
            tabIndex={0}
            onClick={onClose}
            aria-labelledby="label"
            ref={overlayRef}
          />
        </CSSTransition>
        {children}
      </div>
    </Portal>
  );
};
