import React,{Component,PropTypes} from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import Menu from './containers/Menu';
import Board from './containers/Board';
import Tribes from './containers/Tribes';
import CreditsScreen from './screens/CreditsScreen';
import GalaxyScreen from './screens/GalaxyScreen';
import OptionsScreen from './screens/OptionsScreen';
import SectorScreen from './screens/SectorScreen';
import PlanetScreen from './screens/PlanetScreen';
import ChunkScreen from './screens/ChunkScreen';
import MiniMap from './containers/MiniMap';
import Console from './components/ui/Console';
import SelectedUnits from './components/ui/SelectedUnits';
import AvailableCommands from './components/ui/AvailableCommands';

import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';

//named export for tests
export class App extends Component{

    render(){
        let {history} = this.props;
        return (
            <div id="app">
                <nav id="menu"><Menu/></nav>
                <Router history={history}>
                    <Route path="/" component={Tribes}>
                       <Route path="credits" component={CreditsScreen}/>
                        <Route path="options" component={OptionsScreen}/>
                        <Route path="galaxy/:seed" component={GalaxyScreen}>
                            <Route path="sector/:coords" component={SectorScreen}/>
                        </Route>
                        <Route path="planet/:seed" component={PlanetScreen}>
                            <Route path="chunk/:coords" component={ChunkScreen}/>
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
    routerActions
)(App);
