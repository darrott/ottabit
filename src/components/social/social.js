import React from "react";
import { Grid, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { useSelector, useDispatch } from "react-redux";

export default function Social() {
  const themeState = useSelector((state) => state.theme.value);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={3} sm={1} md={1} style={{ textAlign: "center" }}>
        <LinkedInIcon
          style={{
            color: "#0a66c2",
            fontSize: 50,
          }}
          onClick={() => window.open("https://google.com", "_blank")}
        />
      </Grid>
      <Grid item xs={3} sm={1} md={1} style={{ textAlign: "center" }}>
        <InstagramIcon style={{ color: "#f9038e", fontSize: 50 }} />
      </Grid>
      <Grid item xs={3} sm={1} md={1} style={{ textAlign: "center" }}>
        <GitHubIcon
          style={{
            color: themeState == "light" ? "black" : "white",
            fontSize: 50,
          }}
        />
      </Grid>
      <Grid item xs={3} sm={1} md={1} style={{ textAlign: "center" }}>
        <WhatsAppIcon style={{ color: "#35d366", fontSize: 50 }} />
      </Grid>
      <Grid item xs={3} sm={1} md={1} style={{ textAlign: "center" }}>
        <MailIcon style={{ color: "#cd3c30", fontSize: 50 }} />
      </Grid>
      <Grid item xs={3} sm={1} md={1} style={{ textAlign: "center" }}>
        <CallIcon style={{ color: "#338eff", fontSize: 50 }} />
      </Grid>
    </Grid>
  );
}
