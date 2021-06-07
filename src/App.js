import React from 'react';
import './App.css';

import Start from './Start';
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state={
        name:'르탄이check',
        page:'ranking',
        list:[
            {question:'르탄이는1살이다',answer:"O"},
            {question:'르탄이는2살이다',answer:"O"},
            {question:'르탄이는3살이다',answer:"O"},
            {question:'르탄이는4살이다',answer:"O"},
        ],
        scoreMsg:'이정도면 아주 친한 친구사이! 앞으로더 친하게 지내요check'

    };
  }
  render(){
    return (
        <div className="App">
            {this.state.page === "quiz" && <Quiz list={this.state.list} />}
            {this.state.page === "start" && <Start name={this.state.name} />}
            {this.state.page === "score" && <Score name={this.state.name} scoreMsg={this.state.scoreMsg} />}
            {this.state.page === "message" && <Message name={this.state.name} />}
            {this.state.page === "ranking" && <Ranking  />}
        </div>
    );
  }
}

//스파르타 숙제 3주차 7분 30초부터

export default App;
