import React, {Component} from 'react';

import { Link } from 'react-router'

class Menu extends Component {

    renderMenuItem(props) {
        return (<li id={'menu'+props.key}><Link to={props.path}/><a href={'/'+props.action}>{props.name}</a></li>);
    }

    render() {
        const {entries} = this.props;
        return (<ul>
            {entries.map(this.renderMenuItem)}
        </ul>)
    }
}

Menu.defaultProps = {
    entries: [{
        "key": "1",
        "path":"/game",
        'name': 'New Game',
        'action': 'CREATE_GAME'
    }, {
        "key": "2",
        "path":"/options",
        'name': 'Options',
        'action': 'OPTIONS_SCREEN'
    }, {
        "key": "3",
        "path":"/details",
        'name': 'Pause',
        'action': 'PAUSE_SCREEN'
    }, {
        "key": "4",
        "path":"/credits",
        'name': 'Quit',
        'action': 'QUIT_GAME'
    }]
};

export default Menu;