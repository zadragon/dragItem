import React from 'react';
import './App.css';

import Start from './Start';
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state={
        name:'르탄이'
    };
  }
  render(){
    return (
        <div className="App">
          {/*<Start name={this.state.name} />*/}
          <Quiz />
        </div>
    );
  }
}

//스파르타 숙제 2주차 15분 32초;

export default App;
