import React from 'react';
import { Link } from 'react-router-dom';

//Styled
import { Main, TitleCounter, Box } from '../../styled/main';
import { BoxPostArea, PostId } from './styled';

//API global url
import instance from '../../services/api';

export default class post extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {
        await instance.get('/posts').then(res => {
            const data = res.data
            this.setState({ data })
        })
    }

    render() {
        const posts = this.state.data;

        return (
            <Main>
                <TitleCounter>Total posts <span>1 a {posts.length}</span></TitleCounter>
                <BoxPostArea marginBottom={"25"}>
                    {posts.map(value =>
                        <Link to={"/detalhe-post/" + value.id}>
                            <Box key={value.id} boxWidth={"240"} marginRight={"40"}
                                marginBottom={"40"} marginBottomImg={"30"}>
                                <PostId>Post id
                                <span>{value.id}</span>
                                </PostId>
                                <h3>
                                    {value.title.length > 14 ?
                                    value.title.substring(0, 15) + "..." :
                                    value.title}
                                </h3>
                            </Box>
                        </Link>
                    )}
                </BoxPostArea>
            </Main>
        )
    }
}