import Navigation from "./Navigation";
import "../styles/Save.scss";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import image from "../images/lorde.png";
import PInfo from "./profile/PInfo";

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
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <PInfo></PInfo>

      <Box
        sx={{
          flexGrow: 1,
          marginTop: 10,
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(9)).map((_, index) => (
            <Grid xs={6} sm={4} md={4} key={index}>
              <img width="300px" height="300px" src={image}></img>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
