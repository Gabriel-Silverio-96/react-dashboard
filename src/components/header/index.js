import React from 'react';

//Styled
import { Header, ActionButton, IconArea } from './styled';

//Components
import ModalBell from '../modalHeaderBell';

//Icons
import iconBell from '../../assets/icon/icon-bell.svg';
import iconPost from '../../assets/icon/icon-post.svg';
import userImg from '../../assets/user.png';

function HeaderMain() {
    const valueBell = 3;   
        
    return(
        <Header>
            <ActionButton>
                <IconArea> 
                    <img src={iconBell} alt="Ícone sino"/>
                    <p>{valueBell >= 10 ? "+10" : valueBell}</p>
                    <ModalBell/>
                </IconArea>
                <IconArea>
                    <img src={iconPost} alt="Ícone Posts"/>                                      
                </IconArea>
                <img src={userImg} alt="Imagem do usuário"/>
            </ActionButton>
        </Header>
    )
}

export default HeaderMain;