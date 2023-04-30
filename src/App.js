import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Header from "./components/Header";
import styled from "styled-components";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "./firebaseconfig";
import Login from "./components/Login";
import Spinner from "react-spinkit";
import AppLoading, { AppLoadingContents } from "./AppStyled";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [user, loading] = useAuthState(firebaseAuth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            alt="slack.logo"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
