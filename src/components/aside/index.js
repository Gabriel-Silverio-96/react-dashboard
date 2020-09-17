import React from 'react';
import { Link } from 'react-router-dom';

//Styled
import { MenuLateral, List } from '../../styled/main';

//Components
import AsideBanner from '../../components/asideBanner';

//Assets
import LogoDesk from '../../assets/logo-desk.svg';
import iconHome from '../../assets/icon/icon-home.svg';
import iconUser from '../../assets/icon/icon-user.svg';
import iconPost from '../../assets/icon/icon-post.svg';
import iconConfig from '../../assets/icon/icon-config.svg';
import iconExit from '../../assets/icon/icon-exit.svg';

function aside() {
    return(
        <MenuLateral>
            <img src={LogoDesk} alt="Logo desk"></img>           
            <List>
               <Link to="/">
                   <img src={iconHome} alt="Ícone casa"/>
                    <li>Home</li>
               </Link>
               <Link to="/usuarios">
                    <img src={iconUser} alt="Ícone usuário"/>
                    <li>Usuários</li>
               </Link>
               <a href="/post">
                    <img src={iconPost} alt="Ícone post"/>
                    <li>Posts</li>    
               </a>
            </List>
            <AsideBanner/>
            <List>
                <Link href="/">
                    <img src={iconConfig} alt="Ícone configurações"/>
                    <li>Configurações</li>
                </Link>
                <Link href="/">
                    <img src={iconExit} alt="Ícone sair"/>
                    <li>Sair</li>
                </Link>
            </List>
        </MenuLateral>
    )
}

export default aside;