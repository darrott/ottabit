import "./App.css";
import fotoProfilo from "./assets/foto-profilo.webp";
import React, { useState, useEffect, useRef } from "react";
import { Container, CssBaseline, Grid, ListItem, Avatar } from "@mui/material";
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
import ScrollToTop from "react-scroll-to-top";
import Markdown from "markdown-to-jsx";

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

  const [post, setPost] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  const fetchPosts = useRef(false);

  useEffect(() => {
    if (fetchPosts.current) return;
    fetchPosts.current = true;
    const markdown = importAll(
      require.context("./blog_articles", false, /\.(md)$/)
    );
    markdown.map((file_name) => {
      let filename = file_name.substring(file_name.lastIndexOf("/") + 1);
      filename = filename.split(".");
      filename.splice(1, 1);
      filename = filename[0] + "." + filename[1];
      import(`./blog_articles/${filename}`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPost((prevState) => [...prevState, res]));
        })
        .catch((err) => console.log(err));
    });
  }, []);

  const ImageMarkdown = ({ src, alt, title }) => (
    <Image
      src={process.env.PUBLIC_URL + src}
      alt={alt}
      title={title}
      fluid
      style={{ maxWidth: 250 }}
    />
  );

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
            <Avatar
              src={fotoProfilo}
              alt="Andrea Doghetti"
              sx={{ width: 200, height: 200 }}
              style={{ margin: "0 auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h2 style={{ textAlign: "left" }}>
              Ciao{" "}
              <Emoji symbol="????" style={{ fontSize: 40, lineHeight: 1.2 }} />
            </h2>
            <h4 style={{ textAlign: "left", lineHeight: 1.4 }}>
              Io sono Andrea!
              <br /> Sono uno Sviluppatore Web, appassionato di tecnologia,
              smanettone e amante del caffe'{" "}
              <Emoji symbol="???" style={{ fontSize: 24 }} />
            </h4>
          </Grid>
        </Grid>
        <br />
        <br />
        <Social />
        <br />
        <ListItem divider />
        <br />
        <h2 style={{ textAlign: "center" }}>Ultimi Articoli</h2>
        <br />
        <Grid container>
          {post.map((article) => (
            <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
              <Markdown
                options={{
                  overrides: {
                    img: ImageMarkdown,
                  },
                }}
              >
                {article.substring(0, 250).trimEnd().concat("...")}
              </Markdown>
            </Grid>
          ))}
        </Grid>
        <br />
        <ListItem divider />
        <ScrollToTop smooth />
      </ThemeProvider>
    </Container>
  );
}

export default App;
