import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ButtonClose from '../button-close/button-close';
import './modal.scss';
import { CSSTransition } from 'react-transition-group';

export class ModelContextApi {
  public renderModalContent: (content: React.ReactNode) => void =
    () => { throw new Error('Not Implemented.'); }
}

export const ModalContext = React.createContext<ModelContextApi>(new ModelContextApi());

interface ModalProviderProps {
  children: React.ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  console.log('rendering modal provider...');

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>();

  function renderModalContent(content: React.ReactNode) {
    setContent(content);
    setIsOpen(true);
  }
  function close() {
    console.log('closing...');
    setIsOpen(false);
  }
  return (
    <ModalContext.Provider value={{ renderModalContent }}>
      <Modal isOpen={isOpen} content={content} close={close} />
      {children}
    </ModalContext.Provider>
  );
}

interface ModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  close: () => void;
}

function Modal({ isOpen, content, close }: ModalProps) {
  console.log('rendering portal modal...');

  return ReactDOM.createPortal(
    <CSSTransition
      classNames={{
        enter: 'modal_enter',
        enterActive: 'modal_enter-active',
        enterDone: 'modal_enter-done',
        exit: 'modal_exit',
        exitActive: 'modal_exit-active',
        exitDone: 'modal_exit-done'
      }}
      in={isOpen}
      timeout={300}
    >
      <div className="modal">
        <div className="modal__content">
          <ButtonClose onClick={close} className="close" />
          {content}
        </div>
      </div>
    </CSSTransition>
    ,
    document.querySelector('#modal-root')!
  );
}