import styled from 'styled-components';

export const ModalMain  = styled.div `
    position: absolute;
    background-color: #e3e3ffcc;
    width: 100vw;
    height: 100vh;    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;   
    display: flex;
    z-index: 20;
    display: none;
`

export const ModalContent = styled.div `    
    margin: auto;
    background-color: #fff;    
    padding: 25px;
    width: 500px;
    height: auto;     
    border-radius: 20px;
    text-align: center;
`

export const ModalHeader = styled.h2 `
    text-align: center;
    font-family: 'Roboto', sans-serif;   
    color: #1C1CDE;    
    display: flex;
    margin-top: 0;
    margin-bottom: 0;

    div:last-child {
        margin-left: auto;
    }
`

export const ModalBody = styled.div `
    h2 {
        font-family: 'Roboto', sans-serif;
        color: #535479;
    }

    p {
        font-family: 'Roboto', sans-serif;
        color: #000;
    }

`