import styled from 'styled-components';

export const BoxPostArea = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;      

    @media (max-width: 663px) {
        a {
            width: 100%;

            div {
                width: auto;
                margin-right: 0;
            }
        }
    }    
`

export const PostId = styled.div `
    font-family: "Roboto", sans-serif;        
    display: flex;
    align-items: center;
    color: #807F7F;
    margin-bottom: 15px;

    span {
        font-family: "Roboto", sans-serif;        
        font-weight: bold;
        background-color: #1C1CDE; 
        border-radius: 5px;
        padding: 2px 5px;
        color: #fff; 
        margin-left: 10px;
        font-size: 12px;
    }
`