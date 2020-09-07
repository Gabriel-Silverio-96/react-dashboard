import React from 'react';
import { Header, ActionButton, IconArea } from './styled';

//Icons
import iconBell from '../../assets/icon/icon-bell.svg';
import iconPost from '../../assets/icon/icon-post.svg';
import userImg from '../../assets/user.png';

function HeaderMain() {
    return(
        <Header>
            <ActionButton>
                <IconArea>
                    <img src={iconBell} alt="Ícone sino"/>
                    <p>8</p>
                </IconArea>
                <IconArea>
                    <img src={iconPost} alt="Ícone Posts"/>                    
                    <p>2</p>
                </IconArea>
                <img src={userImg} alt="Imagem do usuário"/>
            </ActionButton>
        </Header>
    )
}

export default HeaderMain;