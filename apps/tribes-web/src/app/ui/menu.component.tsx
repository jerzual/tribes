import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './menu.component.scss';

export interface MenuProps {
  match?: any;
}
export interface MenuItem {
  name: string;
  path: string;
  key: string;
  action?: string;
}
export const Menu: FunctionComponent<MenuProps> = (props: MenuProps) => {
  const items: MenuItem[] = [
    {
      key: '1',
      path: '/game',
      name: 'New Game',
      action: 'CREATE_GAME',
    },
    {
      key: '2',
      path: '/options',
      name: 'Options',
      action: 'OPTIONS_SCREEN',
    },
    {
      key: '3',
      path: '/credits',
      name: 'Credits',
      action: 'CREDITS_SCREEN',
    },
    {
      key: '4',
      path: '/quit',
      name: 'Quit',
      action: 'QUIT_GAME',
    },
  ];
  const renderMenuItem = (item: MenuItem, match?: any) => {
    const { name, path, key } = item;
    return (
      <li id={'menu' + key} key={key}>
        <Link to={path}>{name}</Link>
      </li>
    );
  };

  return (
    <nav id="menu">
      <h1 className="title">TRIBES</h1>
      <ul>{items.map(renderMenuItem, props.match)}</ul>
    </nav>
  );
};
