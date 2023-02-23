import React from "react";
import logo from "../../assets/logo.png";
import { Container, Grid } from "@mui/material";
import { Image } from "react-bootstrap";
import "./header.css";
import Menu from "../menu/menu";

export default function Header() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        className="header"
      >
        <Grid item xs={6}>
          <img src={logo} />
        </Grid>
        <Grid item>
          <Menu />
        </Grid>
      </Grid>
    </Container>
  );
}
