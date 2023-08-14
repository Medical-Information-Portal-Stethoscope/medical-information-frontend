import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: ReactNode;
}

const modalRoot = document.getElementById('modals') as HTMLElement;

export default function Portal({ children }: IPortalProps) {
  return ReactDOM.createPortal(children, modalRoot);
}
