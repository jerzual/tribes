import React, {Component} from 'react';

class GalaxyScreen extends Component {

    render(props){
        let {seed} = props;
        return <div>
            <h1>Galaxy #{seed}</h1>
        </div>
    }

}

export default GalaxyScreen;