import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerFrom from "./AddPlayerFrom";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  //player ID counter
  prevPlayerID = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          //"spread" operator to merge existing players with a newly created
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerID += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighestScore = () => {
    const scores = this.state.players.map( p => p.score);
    const highScore = Math.max(...scores);
    if(highScore){
      return highScore;
    }
    return null;
  }

  render() {
    const highScore = this.getHighestScore();
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        )}

        <AddPlayerFrom addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
