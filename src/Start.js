import React from 'react';
import img from './char_item1.jpg';
import {useDispatch, useSelector} from "react-redux";
import {addUserName} from "./redux/modules/rank";

const Start = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const input_text = React.useRef(null)
    return (
        <div className="container">
            <div className="outter">
                <img className="scc-img" src={img} alt=""/>
                <h1>나는 <span>{name}</span>에대해 얼마나 알고있을까</h1>
                <input ref={input_text} className="text-box" type="text" placeholder="내이름" />
                <button type="button" onClick={()=>{
                    //이름 저장
                    dispatch(addUserName(input_text.current.value));

                    //페이지 이동
                    props.history.push("/quiz");
                }}>시작하기</button>
            </div>
        </div>
    );
};

export default Start;