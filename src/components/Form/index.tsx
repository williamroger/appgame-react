import React from 'react';
import { FiX, FiCheck } from 'react-icons/fi';

import { Container, FormBody, FormFooter } from './styles';

import Button from '../Button';

interface FormProps {
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onClose, ...rest }) => {
  return (
    <Container>
      <FormBody>
        <span>
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" placeholder="Nome do Participante" />
        </span>
        <span>
          <label htmlFor="phone-number">Celular</label>
          <input id="phone-number" name="phone-number" placeholder="(xx) xxxxx-xxxx" />
        </span>
        <span>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" placeholder="participante@email.com" />
        </span>
      </FormBody>
      <FormFooter>
        <Button size="large" ghost={true} onClick={onClose} >
          <FiX size={17} />
            Fechar
          </Button>
        <Button size="large" type="submit">
          <FiCheck size={17} />
            Salvar
          </Button>
      </FormFooter>
    </Container>
  );
}

export default Form;