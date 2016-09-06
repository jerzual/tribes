import React,{Component, PropTypes} from 'react';
import Board from './Board';
import Minimap from './Minimap';

/**
 * Container for a launched game.
 */
export default class Tribes extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    };

    static defaultState = {
        width: window.innerWidth, height: window.innerHeight
    };

    render() {
        const {width, height} = this.props;
        return <div className="game screen">
            <Board width={width} height={height}/>
            <Minimap></Minimap>
        </div>
    }

}

