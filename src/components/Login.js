import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { firebaseAuth, firebaseAuthProvider } from "../firebaseconfig";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    firebaseAuth
      .signInWithPopup(firebaseAuthProvider)
      .catch((error) => alert(error?.message));
  };
  return (
    <LoginConainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
          alt="slack.logo"
        />
        <h1>Sign In to the Slack 2.0</h1>
        <p>www.slack-2.com</p>
        <Button
          variant="contained"
          color="success"
          onClick={signIn}
          sx={{ marginTop: "50px", textTransform: "inherit" }}
        >
          Sign In with Google
        </Button>
      </LoginInnerContainer>
    </LoginConainer>
  );
};

export default Login;

const LoginConainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  background-color: white;
  padding: 100px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin: 20px;
  }
`;
