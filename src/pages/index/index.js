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
    data: [],
    dataPost: []
  }

  async componentDidMount() {
    await instance.get('/users').then(res => {
      const data = res.data.length;
      this.setState({ data });
    })

    await instance.get('/posts').then(res => {
      const dataPost = res.data.length;
      this.setState({ dataPost });
    })
  }

  render() {
    //Total de itens cadastrados na API
    const numberUser = this.state.data;
    const numberPost = this.state.dataPost;

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
            <p>Total de posts cadastrados na API</p>
            {/* Valor da API */}
            <h2>{numberPost}</h2>
          </Box>

          <Link to="/contato">
            <Box boxWidth={"550"} textAlign={"center"} boxHeight={"178"}>
              <h2>Contato</h2>
              <p>Entre em contato com seus colaboradores</p>
            </Box>
          </Link>
        </BoxArea>

        <BoxArea>
          <a href="https://jsonplaceholder.typicode.com/" target="_blank" className="box-api">
            <Box marginRight={"40"} boxHeight={"146"}>
              <h2>API</h2>
              <p>Conheça mais sobre a API utilizada no projeto</p>
            </Box>
          </a>

          <Link to="/usuarios">
            <Box boxWidth={"166"} textAlign={"center"} marginRight={"40"} marginBottomImg={"0"} widthImg={"70"}>
              <img src={iconUsers} alt="" />
              <h3>Usuários</h3>
              <p>Listagem geral</p>
            </Box>
          </Link>

          <Link to="/post">
            <Box boxWidth={"166"} textAlign={"center"} marginBottomImg={"20"} widthImg={"50"}>
              <img src={iconPin} alt="" />
              <h3>Posts</h3>
              <p>Total cadastrados</p>
            </Box>
          </Link>
        </BoxArea>
      </Main>
    )
  }
}