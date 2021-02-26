import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import swal from 'sweetalert';

import {
  FiPlus,
  FiEdit,
  FiTrash,
  FiEye,
  FiX,
  FiCheck
} from 'react-icons/fi';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

import {
  Container,
  Title,
  Header,
  Subtitle,
  HeaderList,
  List,
  ListMessage,
  ListItem,
  FooterList,
  Form,
  FormBody,
  FormFooter,
} from './styles';

interface Participant {
  name: string;
  phone: string;
  email: string;
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

const storageKey = '@AppGameReact:participants';

const Dashboard: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [titleModal, setTitleModa] = useState('');
  const { register, handleSubmit, control, errors, reset, setValue } = useForm<Input>({
    resolver: yupResolver(ParticipantSchema)
  });
  const [participants, setParticipants] = useState<Participant[]>(() => {
    const storageParticipants = localStorage.getItem(storageKey);

    if (storageParticipants) {
      return JSON.parse(storageParticipants);
    }

    return [];
  });
  const [userUpdate, setUserUpdate] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(participants));
  }, [participants]);

  let isAddMode = false;

  function handleShowModal(event: any, id?: number) {
    const idButton = event.target.attributes.id ? event.target.attributes.id.nodeValue : null;
    isAddMode = !!idButton && idButton === 'AddParticipant';

    if (isAddMode) {
      setTitleModa('Adicionar');
    } else {
      setTitleModa('Editar');
      const usersStorage = localStorage.getItem(storageKey);
      if (usersStorage) {
        const userForUpdate = JSON.parse(usersStorage).splice(id, 1);
        setUserId(Number(id));
        setUserUpdate(userForUpdate);
      }
    }

    setIsOpenModal((prevState) => !prevState);
  }

  useEffect(() => {
    if (!isAddMode && userUpdate.length) {
      setValue('name', userUpdate[0]['name']);
      setValue('phone', userUpdate[0]['phone']);
      setValue('email', userUpdate[0]['email']);
    }
  }, [isAddMode, setValue, userUpdate]);

  function handleHideModal() {
    reset();
    setIsOpenModal((prevState) => !prevState);
  }

  function handleFormSubmit(data: any) {
    try {
      if (isAddMode) {
        setParticipants([...participants, data]);
        handleHideModal();
        swal('Novo Participante cadastrado com sucesso!', {
          icon: 'success',
        });
      } else {
        const arrParticipants = participants;
        arrParticipants[userId] = data;
        setParticipants([...arrParticipants]);
        handleHideModal();
        swal('Participante editado com sucesso!', {
          icon: 'success',
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function deleteParticipant(id: number) {
    const storageItems = localStorage.getItem(storageKey);

    if (storageItems) {
      swal({
        title: 'Você tem certeza',
        text: 'Que deseja excluir este Participante?',
        icon: 'warning',
        buttons: ['Não, cancelar', 'Sim, continuar'],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          const items = JSON.parse(storageItems);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const removedItem = items.splice(id, 1);
          const newStorageItems = items;

          setParticipants([...newStorageItems]);

          swal('Participante excluído com sucesso!', {
            icon: 'success',
          });
        } else {
          swal('Ótima decisão, o participante será mantido!');
        }
      });
    }
  }

  return (
    <>
      <Container>
        <Title>Meu Torneio</Title>

        <Header>
          <Subtitle>Participantes</Subtitle>

          <Button
            size="large"
            onClick={(event) => handleShowModal(event)}
            id="AddParticipant"
          >
            <FiPlus size={17} />
            Adicionar Participante
          </Button>
        </Header>

        <HeaderList>
          <span>
            Nome
        </span>
          <span>
            Celular
        </span>
          <span>
            E-mail
        </span>
          <span>
            Ações
        </span>
        </HeaderList>
        <List>
          {participants.length ? participants.map((participant, index) => (
            <ListItem key={index}>
              <span>
                {participant.name}
              </span>
              <span>
                {participant.phone}
              </span>
              <span>
                {participant.email}
              </span>
              <span>
                <Button
                  size="small"
                  onClick={(event) => handleShowModal(event, index)}
                >
                  <FiEdit size={16} />
                </Button>
                <Button size="small" onClick={() => deleteParticipant(index)}>
                  <FiTrash size={16} />
                </Button>
              </span>
            </ListItem>
          )) : <ListMessage>Ainda não existem participantes cadastrados.</ListMessage>}
        </List>
        <FooterList>
          <Link to="/keys">
            <Button size="large">
              <FiEye size={17} />
              Ver chaves
            </Button>
          </Link>
        </FooterList>
      </Container>

      <Modal
        title={`${titleModal} Participante`}
        isOpen={isOpenModal}
        onClose={handleHideModal}
      >
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
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
            <Button size="large" ghost={true} onClick={handleHideModal} >
              <FiX size={17} />
            Fechar
          </Button>
            <Button size="large" type="submit">
              <FiCheck size={17} />
            Salvar
          </Button>
          </FormFooter>
        </Form>
      </Modal>
    </>
  );
}

export default Dashboard;