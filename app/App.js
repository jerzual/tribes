import React,{Component,PropTypes} from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import Menu from './containers/Menu';
import Board from './containers/Board';
import Tribes from './containers/Tribes';
import MiniMap from './containers/MiniMap';
import Console from './components/ui/Console';
import SelectedUnits from './components/ui/SelectedUnits';
import AvailableCommands from './components/ui/AvailableCommands';

import history from 'history';
import {connect} from 'react-redux';
import {routeActions} from 'react-router-redux';

//named export for tests
export class App extends Component{

    render(){
        return (
            <div id="app">
                <nav id="menu"><Menu/></nav>

                <Router history={history}>
                    <Route path="/" component={Tribes}>
                       <Route path="credits" component={Credits}/>
                        <Route path="options" component={Options}/>
                        <Route path="galaxy/:seed" component={Board}>
                            <Route path="sector/:coords" component={Bar}/>
                            <Route path="details/:coords" component={Bar}/>
                            <Route path="planet/:seed" component={Bar}>
                                <Route path="chunk/:coords" component={Bar}/>
                            </Route>
                        </Route>
                    </Route>
                </Router>
                <Board/>
            </div>
        );
    }
};


export default connect(
    null,
    routeActions
)(App);
/*
 <Router history={history}>
 <Route path="/" component={Tribes}>
 <IndexRoute component={Home}/>
 <Route path="credits" component={Credits}/>
 <Route path="details" component={Details}>
 <Route path="map" component={Bar}/>
 <Route path="details" component={Bar}/>

 </Route>
 </Route>
 </Router>*/