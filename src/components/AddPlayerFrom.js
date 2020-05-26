import React, {Component} from 'react';

class AddPlayerFrom extends Component {
    state = {
        value: ''
    };

    handleValueChange = e => {
        this.setState({ value: e.target.value });
    }

    //adds player to the App players state
    handleSubmit = e => {
        //if we dont use it, the browser sends the POST request to the server, reload and we will lose all the changes
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value: ''});
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}
export default AddPlayerFrom;
