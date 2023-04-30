import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseconfig";

function Header() {
  const [user] = useAuthState(firebaseAuth);
  // console.log("user", user);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => firebaseAuth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search..." />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 8px;
  text-align: center;
  background-color: #421f44;
  display: flex;
  color: gray;
  border: 1px gray solid;
  padding: 0 50px;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
