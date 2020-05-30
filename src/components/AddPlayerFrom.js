import React, {Component} from 'react';

class AddPlayerFrom extends Component {

    /**createRef makes the component "uncontrolled". it is more easy and concise syntaxix, however, it does not handle internal state
     * with createRef render() is called only once
     */

    playerInput = React.createRef();

    //adds player to the App players state
    handleSubmit = e => {
        //if we dont use it, the browser sends the POST request to the server, reload and we will lose all the changes
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
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
