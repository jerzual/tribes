import React, {Component} from 'react';

class ChunkScreen extends Component {

    render(props){
        let {seed} = props;
        return <div>
            <h1>Chunk #{seed}</h1>
        </div>
    }

}

export default ChunkScreen;