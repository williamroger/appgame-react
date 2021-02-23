import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../components/Button';

import {
  Container,
  Title,
  Content,
  GroupKey,
  TitleKey,
  Key,
  Footer
} from './styles';

const Keys: React.FC = () => {
  return (
    <Container>
      <Title>Meu Torneio - Chaves</Title>
      <Content>
        <GroupKey>
          <TitleKey>
            A
          </TitleKey>
          <Key>
            Jogador 01
          </Key>
          <Key>
            Jogador 02
          </Key>
        </GroupKey>
      </Content>
      <Footer>
        <Link to="/">
          <Button size="large" ghost={true}>
            <FiArrowLeft size={17} />
            Voltar
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}

export default Keys;