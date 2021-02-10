import React from 'react';

import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';

const links = [
  {
    texto: 'Home',
    url: '/'
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  },
];

function Menu() {
  
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <a href={link.url}>{link.texto}</a>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu;