import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { TextareaAutosize } from "@material-ui/core";
import "./sign-up.scss";
import axios from "axios";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Arun Rana
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  upload:{
    margin:'1rem 0',
    display:'block',
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    rezize: "both",
    height: 100 + "px",
    width: 100 + "%",
    opacity: 0.87,
    color: "grey",
    cursor: "text",
    display: "inline-flex",
    position: "relative",
    fontSize: "1rem",
    boxSizing: "border-box",
    alignItems: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: "1.1876em",
    letterSpacing: "0.00938em",
    background: "transparent",
    borderRadius: 4 + "px",
    padding: "18.5px 14px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  input: {
    display: "none",
    margin: '1rem'
  },
}));

export default function SignUp({ setHasSignedUp }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isValid, setIsValid] = useState(true);

  const classes = useStyles();

  const handleSubmit = (e) => {
    if (!email) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    const payload = { firstName, lastName, email, msg };
    axios.post("http://localhost:8080", payload).then((res) => {
      setHasSignedUp(true);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{ color: "#3f51b5" }}>
          Let's connect.
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!isValid}
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!!!isValid && (
                <div className="error ">Please enter a valid email.</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                variant="outlined"
                name="textarea"
                label="textarea"
                type="textarea"
                id="textarea"
                autoComplete="current-password"
                className={classes.textarea}
                minRows={8}
                placeholder="Let your thoughts flow..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </Grid>
          </Grid>

          {/* <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            startIcon={<CloudUploadIcon />}
          />
          <label htmlFor="contained-button-file" className={classes.upload}>
            <Button variant="contained" color="primary" component="span"  startIcon={<AttachFileIcon />}>
              Add Files
            </Button>
          </label> */}


          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Connect
          </Button>
        </div>
      </div>
    </Container>
  );
}
