import React from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";

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
            <Switch>
                <Route path="/" exact component={Start} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/message"  component={Message} />
                <Route path="/ranking"  component={Ranking} />
            </Switch>
        </div>
    );
  }
}

//스파르타 숙제 3주차 12분 00초부터

export default withRouter(App);
