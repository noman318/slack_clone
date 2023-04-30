import styled from "styled-components";

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
export default AppLoading;
export const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
