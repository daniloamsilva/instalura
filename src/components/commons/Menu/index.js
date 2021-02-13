import React from 'react';

import MenuWrapper from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import Text from '../../foundation/Text';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => (
          <Text
            tag="a"
            variant="smallestException"
            key={link.url}
            href={link.url}
          >
            {link.texto}
          </Text>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button variant="secondary.main" ghost>
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

export default Menu;
