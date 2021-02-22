import React, { useEffect } from 'react';

import { FiX, FiCheck } from 'react-icons/fi';

import Button from '../Button';

import {
  Container,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter
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
        <ModalFooter>
          <Button size="large" ghost={true} onClick={onClose}>
            <FiX size={17} />
            Fechar
          </Button>
          <Button size="large">
            <FiCheck size={17} />
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Container>
  );
}

export default Modal;