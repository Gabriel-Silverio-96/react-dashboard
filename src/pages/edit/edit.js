import React from 'react';

//Style
import { Main, Title, ButtonSave } from '../../styled/main';
import { FormCol, InputArea } from './styled';

//Modal 
import Modal from '../../components/modal/modal';

//API global url
import instance from '../../services/api';

export default class edit extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        await instance.get(`/users/${id}`).then(res => {
            const data = res.data;
            this.setState({ data });
        })
    }

    render() {
        const userData = this.state.data;     
        console.log(Object.keys(userData))           
        
        return (
            <Main>
                {/* <Modal/> */}
                <Title>Editar informações</Title>
                <form>
                    <FormCol>
                        <InputArea width={"50"} widthDiv={"auto"}>
                            <label>ID</label>
                            <input type="text" defaultValue={userData.id} name="id" disabled />
                        </InputArea>

                        <InputArea minWidth={"300"}>
                            <label>Nome</label>
                            <input type="text" defaultValue={userData.name} name="name" />
                        </InputArea>

                        <InputArea>
                            <label>Nome de usuário</label>
                            <input type="text" defaultValue={userData.username} name="username" />
                        </InputArea>

                        <InputArea>
                            <label>Email</label>
                            <input type="email" defaultValue={userData.email} name="email"/>
                        </InputArea>
                    </FormCol>
                    
                    <FormCol>
                        <InputArea>
                            <label>Endereço</label>
                            <input type="text" defaultValue={Object(userData.address).street} name="street" />                            
                        </InputArea>

                        <InputArea>
                            <label>Cidade</label>
                            <input type="text" defaultValue={Object(userData.address).city} name="city"/>                            
                        </InputArea>

                        <InputArea>
                            <label>CEP</label>
                            <input type="text" defaultValue={Object(userData.address).zipcode} name="zipcode"/>                            
                        </InputArea>

                        <InputArea>
                            <label>Fone</label>
                            <input type="text" defaultValue={userData.phone} name="phone"/>                            
                        </InputArea>
                    </FormCol>

                    <FormCol>                     
                        <InputArea>
                            <label>Site</label>
                            <input type="text" defaultValue={userData.website} name="website"/>                            
                        </InputArea>

                        <InputArea>
                            <label>Empresa</label>
                            <input type="text" defaultValue={Object(userData.company).name} name="company"/>                            
                        </InputArea>                     
                    </FormCol>

                    <FormCol>                     
                        <InputArea>
                            <label>Slogan</label>
                            <input type="text" defaultValue={Object(userData.company).catchPhrase} name="catchPhrase"/>                            
                        </InputArea>

                        <InputArea>
                            <label>Área</label>
                            <input type="text" defaultValue={Object(userData.company).bs} name="bs"/>                            
                        </InputArea>                     
                    </FormCol>

                    <ButtonSave colorButton={"#fff"} backgroundButton={"#1C1CDE"}>
                        Salvar
                    </ButtonSave>
                </form>
            </Main>
        )
    }
}


