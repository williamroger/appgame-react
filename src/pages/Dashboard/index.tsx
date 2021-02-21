import React from 'react';

import { FiPlus } from 'react-icons/fi';

import Button from '../../components/Button';

import { Container, Title, Header, Subtitle } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Meu Torneio</Title>
      <Header>
        <Subtitle>Participantes</Subtitle>

        <Button size="large">
          <FiPlus color="#fff" size={17} />
          Adicionar Participante
        </Button>
      </Header>
    </Container>
  );
}

export default Dashboard;