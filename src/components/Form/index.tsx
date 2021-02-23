import React from 'react';
import { useForm } from 'react-hook-form';
import { FiX, FiCheck } from 'react-icons/fi';

import { Container, FormBody, FormFooter } from './styles';

import Button from '../Button';

interface FormProps {
  onClose: () => void;
}

type Input = {
  name: string;
  phone: string;
  email: string;
}

const Form: React.FC<FormProps> = ({ onClose, ...rest }) => {
  const { register, handleSubmit, watch, errors } = useForm<Input>();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('email'));

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormBody>
        <span>
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" ref={register} placeholder="Nome do Participante" />
        </span>
        <span>
          <label htmlFor="phone-number">Celular</label>
          <input id="phone-number" name="phone-number" ref={register} placeholder="(xx) xxxxx-xxxx" />
        </span>
        <span>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" ref={register} placeholder="participante@email.com" />
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