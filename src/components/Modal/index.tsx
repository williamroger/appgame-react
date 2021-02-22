import React from 'react';

import { FiX } from 'react-icons/fi';

import Button from '../Button';

import {
  Container,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody
} from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <Container onClick={onClose} isOpen={isOpen} className={isOpen ? 'show-modal' : ''}>
      <ModalContent onClick={(event) => event.stopPropagation()} className={isOpen ? 'show-modal-content' : ''}>
        <ModalHeader>
          <ModalTitle>
            {title}
          </ModalTitle>
          <Button size="small" onClick={onClose}>
            <FiX size={17} />
          </Button>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Container>
  );
}

export default Modal;