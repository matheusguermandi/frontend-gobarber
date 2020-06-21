import React from 'react';

import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars2.githubusercontent.com/u/27836893?s=460&u=4d9a53c02a3d30c2e61c992f9ba603547129bfe0&v=4"
              alt="Matheus Guermandi"
            />
            <div>
              <span>Bem-vindo</span>
              <strong>Matheus Guermandi</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
