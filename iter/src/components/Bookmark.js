import React, { useState, useEffect } from "react";

import styled from "styled-components";
import BookmarkImg from "../images/bookmark.png";
import EmptybookmarkImg from "../images/ribbon.png";

const Bookmarkbtn = styled.img`
margin-right: 1em;
width: 23px;
height: 23px;
&:hover {
    cursor: pointer;
  }
       }
`;

const Bookmarkicon = ({ save, onClick }) => {
  return (
    <Bookmarkbtn
      src={save ? BookmarkImg : EmptybookmarkImg}
      onClick={onClick}
    />
  );
};

export default Bookmarkicon;
