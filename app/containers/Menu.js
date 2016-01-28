

export default class Menu extends React.Component{
    const initialState = {
        entries:[{
            'name' : 'New Game',
            'action' :'CREATE_GAME'
        }]

    }
    renderMenuItem(props){
        return (<a onclick={this.props.action}>{this.props.name}</a>);
    }
    render(){
            return(<ul>

        this.initialState.entries.map(renderMenuItem);
            </ul>)
    }
}

