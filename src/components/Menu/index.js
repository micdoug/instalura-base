import React from 'react';
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../theme/Logo";
import { Button } from "../../commons/Button";

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
        <Button variant="secondary.main" ghost>Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}