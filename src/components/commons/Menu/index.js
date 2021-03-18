import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import Text from '../../foundation/Text';

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
        {links.map((link) => (
          <li key={link.key}>
            <Text variant="smallException" tag="a" href={link.url}>{link.texto}</Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button variant="secondary.main" ghost>Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
