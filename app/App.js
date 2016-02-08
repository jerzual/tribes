import React,{Component,PropTypes} from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import Menu from './containers/Menu';
import Tribes from './containers/Tribes';

export default class App extends Component{

    render(){
        return (
            <div id="app">
                <nav id="menu"><Menu></Menu></nav>
                <Router history={history}>
                    <Tribes></Tribes>
                </Router>
            </div>
        );
    }
}
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