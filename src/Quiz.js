import React, {useState} from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import img from './char_item1.jpg';

import SwipeItem from "./SwipeItem";

const Quiz = (props) => {

    const [num, setNum] = useState(0);

    const onSwipe = (direction) => {
        setNum(num + 1);
    }

    return (
        <QuizContainer>
            <p><span>{num + 1}번문제</span></p>

            {props.list.map((l, idx) => {
                if (num === idx) {
                    return <Question key={idx}>{l.question}</Question>
                }
            })}

            <AnswerZone>
                <Answer>o</Answer>
                <Answer>x</Answer>
            </AnswerZone>

            {props.list.map((l, idx) => {
                if (num === idx) {
                    return (
                        <SwipeItem key={idx} onSwipe={onSwipe} />
                    )
                }

            })}

        </QuizContainer>
    );
};

const QuizContainer = styled.div`
  & > p {
    text-align: center
  }

  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
    text-align: center;
  }
`
const Question = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const AnswerZone = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const Answer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12em;
  font-weight: 600;
  color: #dadafc;
`


export default Quiz;



