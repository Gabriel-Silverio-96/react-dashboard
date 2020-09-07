import React from 'react';
import Aside from '../../components/aside';
import Header from '../../components/header';

import { Main, Content } from './styled';
import { Title, Box, BoxArea } from '../../styled/main';

//Icon
import iconUser from '../../assets/icon/icon-user.svg';
import iconUsers from '../../assets/icon/icon-users.svg';
import iconPaper from '../../assets/icon/icon-paper.svg';
import iconPin from '../../assets/icon/icon-pin.svg';

function App() {
  return (
    <Content>
      <Header />
      <Aside />

      <Main>
        <Title>Página inicial</Title>

        <BoxArea marginBottom={"45"}>
          <Box boxWidth={"200"}>
            <img src={iconUser} alt="Ícone usuário"/>
            <p>Total de usuários cadastrados na API</p>

            {/*Valor da API*/}
            <h2>10</h2>
          </Box>

          <Box boxWidth={"200"}>
            <img src={iconPaper} alt="Ícone papel"/>
            <p>Total de usuários cadastrados na API</p>

            {/*Valor da API*/}
            <h2>10</h2>
          </Box>

          <Box boxWidth={"450"} textAlign={"center"}>
            <h2>Contato</h2>
            <p>Entre em contato com seus colaboradores</p>
            <a href="">Ver mais</a>
          </Box>
        </BoxArea>

        <BoxArea>
          <Box boxWidth={"496"}>
              <h2>API</h2>
              <p>Conheça mais sobre a API utilizada no projeto</p>            
          </Box>

          <Box boxWidth={"178"} textAlign={"center"}>            
              <img src={iconUsers} alt=""/>
              <h3>Usuários</h3>
              <p>Listagem geral de usuários</p>            
          </Box>

          <Box boxWidth={"178"} textAlign={"center"}>            
              <img src={iconPin} alt=""/>
              <h3>Usuários</h3>
              <p>Listagem geral de usuários</p>            
          </Box>
        </BoxArea>
      </Main>
    </Content>
  );
}

export default App;
