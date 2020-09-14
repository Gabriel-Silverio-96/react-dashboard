import React from 'react';

//Styled
import { Main, Title } from '../../styled/main';
import { PostDetail, TitleArea, Author, ContentArea } from './styled';

//API global url
import instance from '../../services/api';

export default class detailPost extends React.Component {
    state = {
        data: [],
        userPost: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id;        
        
        //Busca o post na API
        await instance.get(`/posts/${id}`).then(res => {
            const data = res.data;
            this.setState({ data });
        })

        //Busca o usuário que adicionou o posts
        const userId = this.state.data.userId
        await instance.get(`/users/${userId}`).then(res => {
            const userPost = res.data;
            this.setState({ userPost })
        })
    }

    render() {
        const dataPost = this.state.data;
        const dataUserPost = this.state.userPost;

        return(
          <Main>
                <Title>Detalhe post</Title>
                <PostDetail>
                    <TitleArea>
                        <p>Título</p>   
                        <h2>{dataPost.title}</h2>
                    </TitleArea>
                    <Author>
                        <p>Adicionado por:
                            <span> {dataUserPost.name}</span>
                        </p>
                    </Author>
                    <ContentArea>
                        <p>Conteúdo</p>
                        <p>
                            {dataPost.body}
                        </p>
                    </ContentArea>
                </PostDetail>                
          </Main>
        )
    }
}