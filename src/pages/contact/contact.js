import React from 'react';

//Styled
import { Main, Title, Box } from '../../styled/main';
import { BoxContact, Info } from './styled';

//API global url
import instance from '../../services/api';

export default class Contact extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {
        await instance.get('/users').then(res => {
            const data = res.data
            this.setState({ data });
        })
    }

    render() {
        //Objeto com informações do usuário
        const dataUser = this.state.data;

        return (
            <Main>
                <Title>Contato</Title>

                <BoxContact>
                    {dataUser.map(value => 
                    <Box boxWidth={"240"} marginRight={"40"}
                    marginBottom={"40"} marginBottomImg={"30"}>
                        <Info>
                            <p>Nome</p>
                            <p>{value.name}</p>                            
                        </Info>
                        <Info>
                            <p>Email</p>                        
                            <p>{value.email}</p>                            
                        </Info>
                        <Info>
                            <p>Fone</p>
                            <p>{value.phone}</p>                            
                        </Info>
                    </Box>    
                    )}
                </BoxContact>
            </Main>
        )
    }
}