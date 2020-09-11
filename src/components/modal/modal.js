import React from 'react';
import { Link } from 'react-router-dom';
//Style
import { ModalMain, ModalContent, ModalHeader, ModalBody } from './styled';
import { BtnClose, ButtonPrime } from '../../styled/main';
import iconCorrect from '../../assets/icon/icon-correct.svg';

function modalMain() {    
    //Close Modal
    function handleClick() {
        const modalMain = document.getElementById('modalMain');
        modalMain.style = "";
    }

    return (
        <ModalMain id="modalMain">
            <ModalContent>
                <ModalHeader>
                    <div>
                        <BtnClose onClick={handleClick}>X</BtnClose>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <img width="100px" src={iconCorrect} alt="Ícone correto" />
                    <h2>Salvo</h2>
                    <p>As informações foram salvas com sucesso</p>

                    <Link to="/usuarios">
                        <ButtonPrime colorButton={"#1C1CDE"} backgroundButton={"#E3E3FF"} marginTop={25}>
                            Lista de usuários
                        </ButtonPrime>
                    </Link>
                </ModalBody>
            </ModalContent>
        </ModalMain>
    )
}

export default modalMain;

