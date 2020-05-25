import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ButtonClose from '../button-close/button-close';
import './modal.scss';


interface Props {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// turn into class??

export default function Modal({
  opened,
  onClose,
  children
}: Props) {
  const [isOpen, setIsOpen] = useState(opened);

  useEffect(() => {
    if (opened !== isOpen)
      setIsOpen(opened);
  }, [isOpen, opened]);
  return (
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
          <ButtonClose onClick={() => alert('sdds')} className="close" />
          {children}
        </div>
      </div>
    </CSSTransition>
  );

}