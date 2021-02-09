import React from 'react';
import Logo from '../../../theme/Logo';
import {MenuWrapper} from './styles';

export default function Menu() {
  const links = [
    {
      id: 1,
      texto: 'Home',
      url: '/'
    },
    {
      id: 2,
      texto: 'Perguntas Frequentes',
      url: '/faq'
    },
    {
      id: 3,
      texto: 'Sobre',
      url: '/sobre'
    },
  ]
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {
          links.map(link => (
            <a key={link.id} href={link.url}>{link.texto}</a>
          ))
        }
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}