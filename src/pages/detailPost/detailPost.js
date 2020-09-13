import React from 'react';

//Styled
import { Main } from '../../styled/main';

export default class detailPost extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
    }

    render() {
        return(
          <Main>
                <h1>Detalhe post</h1>
          </Main>
        )
    }
}