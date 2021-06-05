import React from 'react';
import styled from 'styled-components';
import img from './char_item1.jpg';

const Quiz = (props) => {
    return (
        <QuizContainer>
            <p><span>5번문제</span></p>

            <Question>문제입니다</Question>

            <AnswerZone>
                <Answer>o</Answer>
                <Answer>x</Answer>
            </AnswerZone>

            <DragItem>
                <img src={img} alt=""/>
            </DragItem>
        </QuizContainer>
    );
};

const QuizContainer = styled.div`
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
`
const Question = styled.h1`
  font-size: 1.5em;
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
  font-size:12em;
  font-weight: 600;
  color:#dadafc;
`

const DragItem = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  z-index: 10;
  opacity: 0.5;
`

export default Quiz;



