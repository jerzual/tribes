import React, {Component} from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

class GalaxyScreen extends Component {

    render(props){
        let {seed} = props;
        return <div>
            <h1>Galaxy #{seed}</h1>
        </div>
    }

}