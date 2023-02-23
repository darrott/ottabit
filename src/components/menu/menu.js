import React, { useState, useEffect, useContext } from "react";
import "./menu.css";
import { Container, Grid, Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../redux/themeSlice";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Offcanvas } from "react-bootstrap";

export default function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const maxWidthBeforeChange = 900;

  const [inOrOff, setInOrOff] = useState(
    width < maxWidthBeforeChange ? "off" : "in"
  );

  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.value);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (width < maxWidthBeforeChange) {
      setInOrOff("off");
    } else {
      setInOrOff("in");
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, []);

  const changeTheme = () => {
    dispatch(change());
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Grid container spacing={2} alignItems="center">
      {inOrOff == "in" ? (
        <>
          <Grid item>Home</Grid>
          <Grid item>Blog</Grid>
          <Grid item>Progetti</Grid>
          <Grid item>Contatti</Grid>
          <Grid item>
            <DarkModeSwitch
              checked={themeState == "light" ? false : true}
              onChange={changeTheme}
            />
          </Grid>
        </>
      ) : (
        <>
          <DarkModeSwitch
            checked={themeState == "light" ? false : true}
            onChange={changeTheme}
          />
          <Button onClick={handleShow}>Menu</Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            style={{
              backgroundColor: themeState == "light" ? "white" : "black",
            }}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              closeVariant={themeState == "light" ? "" : "white"}
            >
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>Menu da fare</Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </Grid>
  );
}
