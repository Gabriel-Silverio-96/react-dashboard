import styled from 'styled-components';

export const BoxContact = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0;
    margin: 0;     
    
    @media (max-width: 663px) {
        div {
            width: 100%;
            margin-right: 0;
        }
    }    
`

export const Info = styled.div`
    margin-bottom: 15px;

    p:first-child {
        font-size: 12px;
        margin-bottom: 5px;
    }

    p:last-child {
        color: #2a2ae0;        
    }
`