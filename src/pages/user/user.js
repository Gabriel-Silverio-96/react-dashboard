import React from 'react';
import { Link } from 'react-router-dom';

//Styled
import { Main, Title, Table } from '../../styled/main';
import { ButtonEdit } from './styled';

//API global url
import instance from '../../services/api';

export default class userList extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {
        await instance.get('/users').then(res => {
            const data = res.data
            this.setState({ data })
        })
    }

    render() {
        const list = this.state.data;        
        return (
            <Main>
                <Title>Total de usuários</Title>

                <Table marginBottomTable={"20"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Nome de usuário</th>
                            <th>Email</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>CEP</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    {list.map(value =>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>{value.address.street}</td>
                            <td>{value.address.city}</td>
                            <td>{value.address.zipcode}</td>
                            <td>
                                <Link to={"/editar/" + value.id}>
                                    <ButtonEdit colorButton={"#1C1CDE"} backgroundButton={"#E3E3FF"}>
                                        Editar
                                    </ButtonEdit>
                                </Link>
                            </td>
                        </tr>
                    )}
                </Table>
            </Main>
        )
    }
}