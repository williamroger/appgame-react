import React from 'react';

import { Container, Title, Header, Subtitle } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Meu Torneio</Title>
      <Header>
        <Subtitle>Participantes</Subtitle>
        <button>Adicionar Participante</button>
      </Header>
    </Container>
  );
}

export default Dashboard;