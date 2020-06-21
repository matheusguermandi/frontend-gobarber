import React from 'react';

import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src="{logo}" alt="GoBarber" />

        <Profile>
          <img src="" alt="" />
          <div>
            <span>Bem-vindo</span>
            <strong>...</strong>
          </div>
        </Profile>
        <button type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  </Container>
);

export default Dashboard;
