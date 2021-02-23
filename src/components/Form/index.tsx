import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

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
  const { register, handleSubmit, control, watch, errors } = useForm<Input>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormBody>
        <span>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            ref={register({ required: true, minLength: 3, pattern: /^[A-Za-z]/i })}
            placeholder="Nome do Participante" />
        </span>
        <span>
          <label htmlFor="phone">Celular</label>
          {/* <input
            id="phone"
            name="phone"
            ref={register({ required: true })}
            placeholder="(xx) xxxxx-xxxx" /> */}
          <Controller
            as={InputMask}
            control={control}
            mask="(99) 99999-9999"
            name="phone"
          />
        </span>
        <span>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            ref={register({ required: true })}
            placeholder="participante@email.com" />
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