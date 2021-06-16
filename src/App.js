import React from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";

import Start from './Start';
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";
import {connect} from 'react-redux';

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (state) => ({
    ...state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
    load: () => {

    },

});

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '르탄이check',
            page: 'ranking',
            list: [
                {question: '르탄이는1살이다', answer: "O"},
                {question: '르탄이는2살이다', answer: "O"},
                {question: '르탄이는3살이다', answer: "O"},
                {question: '르탄이는4살이다', answer: "O"},
            ],
            scoreMsg: '이정도면 아주 친한 친구사이! 앞으로더 친하게 지내요check'

        };
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Start}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/message" component={Message}/>
                    <Route path="/ranking" component={Ranking}/>
                    <Route path="/score" component={Score}/>
                </Switch>
            </div>
        );
    }
}

//스파르타 숙제 4주차 1분 00초부터
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
