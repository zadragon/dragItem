import React from 'react';
import styled from 'styled-components';
import img from "./char_item1.jpg";

const Message = (props) => {
    return (
        <div className="container">
            <div className="outter">
                <img className="scc-img" src={img} alt=""/>
                <h1>{props.name}에게 남기는 한마디</h1>
                <input className="text-box" type="text" placeholder="내이름"/>
                <button type="button">랭킹보러가기</button>
            </div>
        </div>
    );
};

export default Message;