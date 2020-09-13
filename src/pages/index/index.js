import React from 'react';
import { Link } from 'react-router-dom';

//Styled
import { Main } from '../../styled/main';
import { Title, Box, BoxArea } from '../../styled/main';

//Icon
import iconUser from '../../assets/icon/icon-user.svg';
import iconUsers from '../../assets/icon/icon-users.svg';
import iconPaper from '../../assets/icon/icon-paper.svg';
import iconPin from '../../assets/icon/icon-pin.svg';

//API global url
import instance from '../../services/api';

export default class App extends React.Component {
  state = {
    data: []
  }

  async componentDidMount() {
    await instance.get(`/users`).then(res => {
      const data = res.data.length;
      console.log(data)
      this.setState({ data });
    })
  }

  render() {
    const numberUser = this.state.data
    return (
      <Main>
        <Title>Página inicial</Title>
        <BoxArea marginBottom={"25"}>
          <Box boxWidth={"450"} marginRight={"40"} marginBottomImg={"30"}>
            <img src={iconUser} alt="Ícone usuário" />
            <p>Total de usuários cadastrados na API</p>

            {/* Valor da API */}
            <h2>{numberUser}</h2>
          </Box>

          <Box boxWidth={"450"} marginRight={"40"} marginBottomImg={"30"}>
            <img src={iconPaper} alt="Ícone papel" />
            <p>Total de usuários cadastrados na API</p>

            {/* Valor da API */}
            <h2>10</h2>
          </Box>

          <Box boxWidth={"850"} textAlign={"center"}>
            <h2>Contato</h2>
            <p>Entre em contato com seus colaboradores</p>
          </Box>
        </BoxArea>

        <BoxArea>
          <Link to="/api">
            <Box boxWidth={"528"} marginRight={"40"}>
              <h2>API</h2>
              <p>Conheça mais sobre a API utilizada no projeto</p>
            </Box>
          </Link>

          <Link to="/usuarios">
            <Box boxWidth={"170"} textAlign={"center"} marginRight={"40"} marginBottomImg={"0"} widthImg={"70"}>
              <img src={iconUsers} alt="" />
              <h3>Usuários</h3>
              <p>Listagem geral de usuários</p>
            </Box>
          </Link>

          <Box boxWidth={"450"} textAlign={"center"} marginBottomImg={"20"} widthImg={"50"}>
            <img src={iconPin} alt="" />
            <h3>Posts</h3>
            <p>Tabela de posts cadastrados</p>
          </Box>
        </BoxArea>
      </Main>
    )
  }
}