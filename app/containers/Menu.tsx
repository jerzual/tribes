import { Component } from 'inferno';
import { Link } from 'inferno-router';

import * as styles from './Menu.scss';

export interface MenuProps {
  match?: any;
}
export interface MenuItem {
  name: string;
  path: string;
  key: string;
  action?: string;
}
export class Menu extends Component<MenuProps, any> {
  public items: MenuItem[] = [
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
  public renderMenuItem(item: MenuItem, match?: any) {
    const { name, path, key } = item;
    return (
      <li id={'menu' + key} key={key}>
        <Link to={path}>{name}</Link>
      </li>
    );
  }

  public render(props: MenuProps) {
    return (
      <nav id="menu">
        <h1 className={styles.title}>TRIBES</h1>
        <ul>{this.items.map(this.renderMenuItem, props.match)}</ul>
      </nav>
    );
  }
}
