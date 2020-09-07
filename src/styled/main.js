import styled from 'styled-components';

export const Title = styled.h1`    
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-bottom: 50px;
`

export const TitleSpan = styled.h1`    
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
    
    span {        
        font-weight: bold;
    }
`

//Aside
export const MenuLateral = styled.aside`
    width: 180px;
    padding: 0 25px;        
    position: fixed;
    z-index: 10;
    top: 24px;
`

export const List = styled.ul`
    list-style: none;    
    margin-top: 25px;

    li{
        margin-bottom: 25px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #807F7F;
    }
`

export const Box = styled.div`
    padding: 25px;
    border: 1px solid #000;    
    border-radius: 25px;
    margin-top: ${props => props.marginTop + 'px'}; 
    margin-bottom: ${props => props.marginBottom + 'px'}; 
    width: ${props => props.boxWidth + 'px'};
    text-align: ${props => props.textAlign};
    transition: 0.5s;
    
    :hover {        
        border-color: #1C1CDE; 
        transform: translateY(-7px);
        transition: 0.5s;
    }

    img {
        margin: 0px 0 30px;
        width: 35px;        
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #807F7F;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold; 
        font-size: 45px;
        letter-spacing: -2px;
        margin-top: 10px;        
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold; 
        font-size: 25px;        
        margin-top: 10px;        
    }
`

export const BoxArea = styled.div `
    display: flex; 
    justify-content: space-between;
    margin-bottom: ${props => props.marginBottom + 'px'};
`

export const ButtonPrime = styled.button `
    color: ${props => props.colorButton};
    background-color: ${props => props.backgroundButton};
    margin-top: ${props => props.marginTop + 'px'};
    border: 0;
    padding: 15px 30px;
    border-radius: 13px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`