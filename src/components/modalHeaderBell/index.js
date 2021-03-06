import React from 'react';

//Styled
import { ModalBell, ListAction } from './styled';

//Assets
import iconPostWhite from '../../assets/icon/icon-star.svg';

function modalBell() {
    return (
        <ModalBell id="modalBell">
            <ul>
                <ListAction>
                    <img src={iconPostWhite} alt="Ícone Estrela"/>
                    <div>
                        <label>Novo post</label>
                        <li>Marcio Correia</li>
                    </div>
                </ListAction>
                <ListAction>
                    <img src={iconPostWhite} alt="Ícone Estrela"/>
                    <div>
                        <label>Novo post</label>
                        <li>Kelly Moreira</li>
                    </div>
                </ListAction>
                <ListAction>
                    <img src={iconPostWhite} alt="Ícone Estrela"/>
                    <div>
                        <label>Novo post</label>
                        <li>Lauanny Kraiser</li>
                    </div>
                </ListAction>
            </ul>
        </ModalBell>
    )
}

export default modalBell;