import React from 'react';
import { MenuLateral, List } from '../../styled/main';
import AsideBanner from '../../components/asideBanner';

import LogoDesk from '../../assets/logo-desk.svg';

function aside() {
    return(
        <MenuLateral>
            <img src={LogoDesk} alt="Logo desk"></img>           
            <List>
               <a href="">
                    <li>Home</li>
               </a>
               <a href="">
                    <li>Usuários</li>
               </a>
               <a href="">
                    <li>Posts</li>    
               </a>
            </List>
            <AsideBanner/>
            <List>
                <a href="">
                    <li>Configurações</li>
                </a>
                <a href="">
                    <li>Sair</li>
                </a>
            </List>

        </MenuLateral>
    )
}

export default aside;