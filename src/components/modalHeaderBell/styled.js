import styled from 'styled-components';

export const ModalBell = styled.div `
    position: absolute;
    background-color: white;
    z-index: 1;
    top: 42px;
    right: -8px;
    padding: 15px 15px 0;
    border-radius: 15px;
    box-shadow: 0px 31px 99px -17px rgba(0,0,0,0.23);
    width: 250px;     
    display: none;   
`

export const ListAction = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img {
        background-color: #1C1CDE;
        padding: 8px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin-right: 15px;
    }

    label {
        font-weight: bold;
        font-size: 12px;
    }

    li {
        color: #807F7F;
    }
`