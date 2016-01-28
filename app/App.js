import React,{Component,PropTypes} from 'react';
import Menu from './containers/Menu';
import Main from './containers/Main';

export default class App extends Component{

    render(){
        return (
            <div id="app">
                <nav id="menu"><Menu></Menu></nav>
                <sidebar></sidebar>
                <Main></Main>
            </div>
        );
    }
}