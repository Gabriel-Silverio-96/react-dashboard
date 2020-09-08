import React from 'react';
import { Main, Title } from '../../styled/main';

import instance from '../../services/api';

export default class edit extends React.Component {
    state = {
        data: []
    }

    async componentDidMount()  {
        const id = this.props.match.params.id;        

        await instance.get(`/users/${id}`).then(res => {
            const data = res.data;            
            this.setState({ data });
        })
    }
    
    render() {
        const userData = this.state.data;        
        console.table(userData);
        
        return(
            <Main>
                <Title>Editar informações</Title>
            </Main>        
        )
    }
}


