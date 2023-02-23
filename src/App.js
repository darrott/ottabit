import "./App.css";
import fotoProfilo from "./assets/foto-profilo.png";
import React, { useState, useEffect } from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./redux/themeSlice";
import { Image } from "react-bootstrap";
import Header from "./components/header/header";
import Emoji from "./components/emoji/emoji";
import Social from "./components/social/social";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Container>
      <Header />
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{
            marginTop: 30,
          }}
        >
          <Grid item xs={10} sm={4} style={{ textAlign: "center" }}>
            <Image
              src={fotoProfilo}
              roundedCircle
              fluid
              className="fotoProfilo"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h2 style={{ textAlign: "left" }}>
              Ciao{" "}
              <Emoji symbol="👋" style={{ fontSize: 40, lineHeight: 1.2 }} />
            </h2>
            <h2 style={{ textAlign: "left", lineHeight: 1.4 }}>
              Io sono Andrea!
              <br /> Sono uno Sviluppatore Web, appassionato di tecnologia,
              smanettone e amante del caffe'
              <Emoji symbol="☕" style={{ fontSize: 36 }} />
            </h2>
          </Grid>
        </Grid>
        <br />
        <Social />
        <Grid container>
          <Grid item xs={4} justifyContent="left">
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Mangia</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Scrivi Codice</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Dormi</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Ricomincia</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default App;
