import styled from 'styled-components';

export const Header = styled.header`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    height: fit-content;  

    @media (max-width: 1240px) {
        width: 100%;
    }
`

export const ActionButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;    
    margin-left: auto;    
`

export const IconArea = styled.div`
        position: relative;    
        margin-right: 20px;
        cursor: pointer;

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
        
        :hover > #modalBell {
            display: block;
        }
`