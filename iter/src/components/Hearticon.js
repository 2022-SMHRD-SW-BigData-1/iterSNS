import React, { useState, useEffect } from "react";

import styled from "styled-components";
import HeartImg from "../images/heart.png";
import EmptyHeartImg from "../images/empty-heart.png";

const Heart = styled.img`
margin-right: 1em;
width: 23px;
height: 23px;
&:hover {
    cursor: pointer;
  }
       }
`;

const HeartButton = ({ like, onClick }) => {
  return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
};

export default HeartButton;
