import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from "react-redux";

const Score = (props) => {
    const userName = useSelector((state) => state.quiz.name);
    const score_texts = useSelector((state)=> state.quiz.score_texts)
    const answers = useSelector((state)=> state.quiz.answers)

    let correct = answers.filter((answer)=>{
        return answer;
    });

    let score = (correct.length / answers.length) * 100;

    let score_text = "";

    //Object.keys 는 딕셔너리의 키값을 배열로 만들어준다.
    Object.keys(score_texts).map((s, idx)=>{
        //첫번째 텍스트 넣어주기
        if(idx === 0){
            score_text = score_texts[s];
        }

        //실제점수와 기준점수(키로 넣었던 점수) 비교해서 텍스트 넣기
        score_text = parseInt(s) <= score ? score_texts[s] : score_text;
    })

    return (
        <ScoreContainer>
            <Text><span>{userName}</span>퀴즈에<br/>대한 내 점수는?</Text>
            <MyScore>
                <span>{score}</span>점
                <p>{score_text}</p>
            </MyScore>
            <Button onClick={()=>{
                props.history.push("/message");
           }}>한마디남기기</Button>
        </ScoreContainer>
    );
};

const ScoreContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 1.5em;
  margin: 0;
  line-height:1.4;
  & span{
    padding:5px 10px;
    border-radius: 30px;
    background-color:#fefd54;
  }
`;

const MyScore = styled.div`
  text-align: center;
  & span{
    padding:5px 10px;
    border-radius: 30px;
    background-color:#fefd54;
  }
  font-weight: 600;
  font-size:2em;
  margin:24px;
  & > p{
    margin:24px 0;
    font-size:16px;
    font-weight: 400;
  }
`;

const Button = styled.div`
  padding:8px 24px;
  background-color: #dadafc;
  border-radius: 30px;
  margin:8px;
  border:1px solid #dadafc;
  width:80vw;
  text-align: center;
`;


export default Score;