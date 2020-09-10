import styled from 'styled-components';

export const FormCol = styled.form`
    display: flex;
`

export const InputArea = styled.div`
    font-family: 'Roboto', sans-serif;   
    display: flex;
    flex-direction: column;    
    width:  ${props => props.widthDiv ? undefined : "100%"} ;    
    margin-bottom: 30px;    

    label {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        font-size: 16px;
        color: #807F7F;
        padding: 9px 8px;
        border-radius: 5px;
        border: 1px solid #807F7F;   
        max-width: 100%;
        min-width: ${props => props.minWidth + "px"};
        width: ${props => props.widthInput + "px"};     

        :focus {
            outline: none;
            border: 1px solid #1C1CDE;
        }

        :nth-child(even) {
            margin-right: 15px;            
        }
    }
`