import React from 'react';
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../theme/Logo";

const links = [
  { key: 1, texto: 'Home', url: '/' },
  { key: 2, texto: 'Perguntas frequentes', url: '/faq' },
  { key: 3, texto: 'Sobre', url: '/sobre' },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => (
          <li key={link.key}><a href={link.url}>{link.texto}</a></li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}