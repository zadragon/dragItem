import React, {useRef} from 'react';
import img from "./char_item1.jpg";
import { useSelector, useDispatch } from "react-redux";
import {addRank} from './redux/modules/rank';

const Message = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state)=> state.quiz.name);
    const answers = useSelector((state)=> state.quiz.answers);
    const user_name = useSelector((state)=> state.quiz.user_name);

    const input_text = React.useRef(null);

    let correct = answers.filter((answers)=>{
        return answers;
    });

    let score = (correct.length/answers.length) * 100;

    return (
        <div className="container">
            <div className="outter">
                <img className="scc-img" src={img} alt=""/>
                <h1>{name}에게 남기는 한마디</h1>
                <input ref={input_text} className="text-box" type="text" placeholder="한마디"/>
                <button type="button" onClick={()=>{
                    let rank_info = {
                        score: parseInt(score),
                        name: user_name,
                        message: input_text.current.value,
                        current: true,
                    };
                    dispatch(addRank(rank_info))
                    props.history.push('/ranking')
                }}>한마디 적고 랭킹보러가기</button>
            </div>
        </div>
    );
};

export default Message;