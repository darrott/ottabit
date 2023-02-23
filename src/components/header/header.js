import React from "react";
import logo from "../../assets/logo.png";
import { Container, Grid } from "@mui/material";
import { Image } from "react-bootstrap";
import "./header.css";
import Menu from "../menu/menu";

export default function Header() {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
      style={{
        width: "100vw",
      }}
    >
      <Grid item xs={8} sm={6} md={6}>
        <Image src={logo} fluid />
      </Grid>
      <Grid item xs={4} sm={6} md={6}>
        <Menu />
      </Grid>
    </Grid>
  );
}
