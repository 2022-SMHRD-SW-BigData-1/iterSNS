import Navigation from "./Navigation";
import "../styles/Save.scss";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import image from "../images/lorde.png";
import PInfo from "./profile/PInfo";
import MyCards from "./MyCards";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <>
      <Navigation />
      <PInfo />
      <MyCards />
    </>
  );
}
