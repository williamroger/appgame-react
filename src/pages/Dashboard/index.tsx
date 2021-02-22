import React, { useState } from 'react';

import { FiPlus, FiEdit, FiTrash, FiEye } from 'react-icons/fi';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Form from '../../components/Form';

import {
  Container,
  Title,
  Header,
  Subtitle,
  HeaderList,
  List,
  ListItem,
  FooterList
} from './styles';

const Dashboard: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [titleModal, setTitleModa] = useState('');

  function handleShowModal(event: any) {
    const idButton = event.target.attributes.id ? event.target.attributes.id.nodeValue : null;

    if (!!idButton && idButton === 'AddParticipant') {
      setTitleModa('Adicionar');
    } else {
      setTitleModa('Editar');
    }

    setIsOpenModal((prevState) => !prevState);
  }

  function handleHideModal() {
    setIsOpenModal((prevState) => !prevState);
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
          <ListItem>
            <span>
              William Roger
          </span>
            <span>
              (81) 99394-8787
          </span>
            <span>
              williamroger@email.com
          </span>
            <span>
              <Button
                size="small"
                onClick={(event) => handleShowModal(event)}
              >
                <FiEdit size={16} />
              </Button>
              <Button size="small">
                <FiTrash size={16} />
              </Button>
            </span>
          </ListItem>
          <ListItem>
            <span>
              Ryan Pietro
          </span>
            <span>
              (81) 99394-8787
          </span>
            <span>
              ryanpietro@email.com
          </span>
            <span>
              <Button
                size="small"
                onClick={(event) => handleShowModal(event)}
              >
                <FiEdit size={16} />
              </Button>
              <Button size="small">
                <FiTrash size={16} />
              </Button>
            </span>
          </ListItem>
        </List>
        <FooterList>
          <Button size="large">
            <FiEye size={17} />
          Ver chaves
        </Button>
        </FooterList>
      </Container>

      <Modal
        title={`${titleModal} Participante`}
        isOpen={isOpenModal}
        onClose={handleHideModal}
      >
        <Form onClose={handleHideModal} />
      </Modal>
    </>
  );
}

export default Dashboard;