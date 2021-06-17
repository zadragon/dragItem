import React from "react";
import styled from "styled-components";

import img from './char_item1.jpg';
const Spinner = (props) => {
    return (
        <Outter>
            <img src={img} />
        </Outter>
    );
};

const Outter = styled.div`
  background-color: #df402c88;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 150px;
  }
`;
export default Spinner;