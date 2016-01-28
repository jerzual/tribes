import React,{Component,PropTypes} from 'react';
import Menu from './containers/Menu';
import World from './containers/World';

export default class App extends Component{

    render(){
        return (
            <nav id="menu"><Menu/></nav>
                <canvas id ="tribes"></canvas>
            <sidebar></sidebar>
        );
    }
}