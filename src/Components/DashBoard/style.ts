import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
  p {
    margin: 4px;
  }
  img {
    height: 200px;
  }
  h3 {
    margin: 0;
  }
  button {
    margin-top: 30px;
    background-color: red;
    border: none;
    padding: 10px;
    width: 100px;
    border-radius: 20px;
  }
`;
