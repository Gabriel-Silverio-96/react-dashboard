import React from 'react';

//Styled
import { Header, ActionButton, IconArea } from './styled';

//Components
import ModalBell from '../modalHeaderBell';

//Assets
import iconBell from '../../assets/icon/icon-bell.svg';
import iconPost from '../../assets/icon/icon-post.svg';
import userImg from '../../assets/user.png';

function HeaderMain() {
    const valueBell = 3;

    //Abrir menu lateral
    function openMenu() {
        const navIcon = document.getElementById('nav-icon1');
        navIcon.classList.toggle('open');
        
        const menuLateral = document.querySelector('aside');
        if(navIcon.classList.value === 'open') {
            menuLateral.classList.add('show');
        } else {
            menuLateral.classList.remove('show');
        }
    }

    return (
        <Header>
            <div id="nav-icon1" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ActionButton>
                <IconArea>
                    <img src={iconBell} alt="Ícone sino" />
                    <p>{valueBell >= 10 ? "+10" : valueBell}</p>
                    <ModalBell />
                </IconArea>
                <IconArea>
                    <img src={iconPost} alt="Ícone Posts" />
                </IconArea>
                <img src={userImg} alt="Imagem do usuário" />
            </ActionButton>
        </Header>
    )
}

export default HeaderMain;