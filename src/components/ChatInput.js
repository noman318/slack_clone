import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { firebaseDb, firebaseAuth } from "../firebaseconfig";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelId, channelName, chatRef }) => {
  // console.log("channelName", channelName);
  //   const input = useRef(null);
  const [user] = useAuthState(firebaseAuth);

  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    firebaseDb.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    setInput("");
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  console.log("channelId", channelId);
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="message"
          placeholder={`Message # ${channelName ? channelName : "ROOM"}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none;
  }
`;
