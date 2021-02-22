import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.show-modal {
    opacity: 1;
    pointer-events: visible;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  cursor: default;
  transform: translateY(-200px);
  transition: all 0.3s ease-in-out;

  &.show-modal-content {
    transform: translateY(0);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e0e7ef;
`;

export const ModalTitle = styled.h2`
  color: #45638c;
  font-size: 20px;
  font-weight: 500;
`;

export const ModalBody = styled.div``;
