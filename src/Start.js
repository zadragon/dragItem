import React from 'react';
import img from './char_item1.jpg';

const Start = (props) => {
    return (
        <div className="container">
            <div className="outter">
                <img className="scc-img" src={img} alt=""/>
                <h1>나는 <span>{props.name}</span>에대해 얼마나 알고있을까</h1>
                <input className="text-box" type="text" placeholder="내이름"/>
                <button type="button">시작하기</button>
            </div>
        </div>
    );
};

export default Start;