import styled from 'styled-components';

export const Header = styled.header`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    height: fit-content;  
`

export const ActionButton = styled.div`
    display: flex;
    align-items: center;    
    justify-content: space-between;
    width: 15%;
    margin-left: auto;    
`



export const IconArea = styled.div`
        position: relative;        ;
        
        p {
            position: absolute;
            text-align: center;            
            top: -11px;
            right: 11px;
            border: 2px solid #fff;
            font-size: 13px;
            background-color: red;
            padding: 4px;
            height: 16px;
            width: 15px;
            border-radius: 50%;
            color: #fff;
            font-family: 'Roboto', sans-serif;
            font-weight: 800;
            letter-spacing: -2px;
        }
`