import styled from 'styled-components';

export const PostDetail = styled.div `
    padding: 40px 40px;
    background-color: #F5F5FE;
    border-radius: 15px;    
`

export const TitleArea = styled.div `
    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #807F7F;
        margin-bottom: 0;
    }

    h2 {
        margin-top: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: bold; 
        font-size: 45px;
        letter-spacing: -2px;
        margin-top: 10px;   
        color: #000;   
    }
`

export const Author = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #807F7F;
        margin-bottom: 0;

        span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: #1C1CDE;
        }
    }
`

export const ContentArea = styled.div `
    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #807F7F;
        margin-bottom: 0;
        width: 80%;
    }
`