import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../images/로고1.png";
import Navigation from "./Navigation";
import { BsCheckSquare } from "react-icons/bs";
import "../styles/post.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Post() {
  return (
    <>
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        className="
      Upload"
      >
        <BsCheckSquare size={40}></BsCheckSquare>
      </div>
      <Box
        sx={{ width: "100%", marginLeft: 50, marginRight: 50, marginTop: 1 }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Item>
              <img width="300px" height="500px" src={logo}></img>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {" "}
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            </Item>
            <Item>
              {" "}
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
