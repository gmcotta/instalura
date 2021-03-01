import React from 'react';

import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './MenuWrapper';

export default function Menu() {
  const links = [
    {
      id: 1,
      texto: 'Home',
      url: '/',
    },
    {
      id: 2,
      texto: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      id: 3,
      texto: 'Sobre',
      url: '/sobre',
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {
          links.map((link) => (
            <Text
              tag="a"
              variant="smallestException"
              key={link.id}
              href={link.url}
            >
              {link.texto}
            </Text>
          ))
        }
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
