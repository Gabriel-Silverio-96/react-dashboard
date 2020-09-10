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
`

export const ModalContent = styled.div `    
    margin: auto;
    background-color: #fff;    
    padding: 25px;
    width: 500px;
    height: 250px;     
    border-radius: 20px;
`

export const ModalHeader = styled.h2 `
    text-align: center;
    font-family: 'Roboto', sans-serif;   
    color: #1C1CDE;    
`