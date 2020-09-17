import styled from 'styled-components';

export const Title = styled.h1`    
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-bottom: 25px;
`

export const TitleSpan = styled.h1`    
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
    
    span {        
        font-weight: bold;
    }
`

export const TitleCounter = styled.h1 `
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-bottom: 25px;

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        color: #1C1CDE;
        font-size: 15px;
    }

`

//Aside
export const MenuLateral = styled.aside`
    width: 180px;
    padding: 0 25px;        
    position: fixed;
    z-index: 10;
    top: 24px;

    @media (max-width: 1240px) {
        display: none;
    }
`

export const List = styled.ul`
    list-style: none;    
    margin-top: 25px;
    
    a {
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        :hover > li {
            color: #1C1CDE;

            ::after {
                content: "|";
                position: absolute;
                left: 5px;
                width: 50px:
                height: 50px;
                background-color: #1C1CDE;
            }
        }

        img {
            margin-right: 20px;
            width: 22px;
        }
    }


    li{
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
    margin-right: ${props => props.marginRight + 'px'}; 
    margin-bottom: ${props => props.marginBottom + 'px'}; 
    width: ${props => props.boxWidth + 'px'};
    text-align: ${props => props.textAlign};
    transition: 0.5s;
    height: ${props => props.boxHeight + 'px'};
    
    :hover {        
        border-color: #1C1CDE; 
        transform: translateY(-7px);
        transition: 0.5s;
    }

    img {
        margin-bottom: ${props => props.marginBottomImg + 'px'};
        width: ${props => props.widthImg + 'px'};        
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
        color: #000;     
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold; 
        font-size: 25px; 
        color: #000;                          
    }
`

export const BoxArea = styled.div`
    display: flex; 
    justify-content: space-between;
    margin-bottom: ${props => props.marginBottom + 'px'};

    @media (max-width: 1329px) {
        a div {
            width: auto;
        }
    }

    @media (max-width: 720px) {     
        margin-bottom: 0px;     
    }

    @media (max-width: 720px) {
        flex-direction: column;

        div {
            width: auto;
            margin-right: 0;
            margin-bottom: 50px;
        }
    }

    .box-api {
        width: 100%;
    }
`

export const ButtonPrime = styled.button`
    color: ${props => props.colorButton};
    background-color: ${props => props.backgroundButton};
    margin-top: ${props => props.marginTop + 'px'};
    border: 0;
    padding: 15px 30px;
    border-radius: 13px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    cursor: pointer;
    
    :focus {
        outline: none;
    }
`

export const ButtonSave = styled(ButtonPrime)`
    margin-left: auto;
    display: block;
    cursor: pointer;
`

//Main page
export const Main = styled.main`    
    width: 80%;
    margin-left: auto;
    padding: 0 25px;

    @media (max-width: 1240px) {
        width: 100%;
    }
`

//Table
export const Table = styled.table`
    overflow-x: auto;
    display: contents;
    margin-bottom: ${props => props.marginBottomTable + "px"};

    thead tr th{
        font-weight: bold;
    }

    th, td {
        padding: 15px;
        text-align: left;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }

    tr:nth-child(even) {
        background-color: #F8F8F8;
    }

    tr td {
        :first-child {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;        
                    
        }

        :last-child {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;        
        }
    }
`

export const BtnClose = styled.button`
    font-size: 15px;   
    font-weight: bold;
    border: 2px solid #1C1CDE;
    border-radius: 50%;
    padding: 5px 9px;
    color: #1C1CDE;
    background-color: #fff;   
    transition: 0.5s;
    cursor: pointer;

    :hover {
        background-color: #1C1CDE;
        color: #fff;
        transition: 0.5s;        
    } 

    :focus {
        outline: none;
    }
`