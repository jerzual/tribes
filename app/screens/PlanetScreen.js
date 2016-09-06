import React, {Component} from 'react';

class PlanetScreen extends Component {

    render(props){
        let {seed} = props;
        return <div>
            <h1>Planet #{seed}</h1>
        </div>
    }

}

export default PlanetScreen;