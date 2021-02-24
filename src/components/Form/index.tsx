import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

// eslint-disable-next-line no-useless-escape
const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
const nameRegex = /[A-z]/;

const ParticipantSchema = yup.object().shape({
  name: yup.string()
    .required('O campo Nome completo é obrigatório.')
    .min(3, 'O Nome deve ter no minímo 3 caracteres')
    .matches(nameRegex, 'Não é permitido números no nome.'),
  phone: yup.string()
    .required('O campo Celular é obrigatório.')
    .matches(phoneRegex, 'Informe um Número válido.'),
  email: yup.string()
    .required('O campo E-mail é obrigatório.')
    .email('Informe um E-mail válido.'),
});

const Form: React.FC<FormProps> = ({ onClose, ...rest }) => {
  const { register, handleSubmit, control, errors } = useForm<Input>({
    resolver: yupResolver(ParticipantSchema)
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormBody>
        <span>
          <label htmlFor="name">Nome completo</label>
          <input
            id="name"
            name="name"
            ref={register({ required: true, minLength: 3, pattern: /^[A-Za-z]+$/i })}
            placeholder="Nome do Participante" />
          {errors.name && <small>{errors.name.message}</small>}
        </span>
        <span>
          <label htmlFor="phone">Celular</label>
          <Controller
            as={InputMask}
            control={control}
            defaultValue={''}
            rules={{ required: true }}
            mask="(99) 99999-9999"
            name="phone"
            placeholder="(xx) xxxxx-xxxx"
          />
          {errors.phone && <small>{errors.phone.message}</small>}
        </span>
        <span>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            ref={register({ required: true })}
            placeholder="participante@email.com" />
          {errors.email && <small>{errors.email.message}</small>}
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