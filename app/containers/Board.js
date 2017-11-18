import React,{Component, PropTypes} from 'react';
import THREE from 'three';
import Hexagon from '../components/board/Hexagon';

/**
 *
 */
export default class Board extends Component {
    render() {
        this.props ={
            id:'board',
            width:window.innerWidth,
            height:window.innerHeight,
        };
    }
};