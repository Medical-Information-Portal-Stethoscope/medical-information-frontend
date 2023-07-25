import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  isOpened: boolean;
}

const modalRoot = document.getElementById('modals') as HTMLElement;

export default function Portal({ children, isOpened }: IPortalProps) {
  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(children, modalRoot);
}
