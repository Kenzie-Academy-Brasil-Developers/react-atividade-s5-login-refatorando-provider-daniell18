import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  font-family: "sans-serif";
  font-weight: bold;
  background-image: url("https://coloredbrain.com/wp-content/uploads/2016/07/login-background.jpg");
  background-size: cover;
`;
export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  input {
    height: 25px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px;
  }
`;
export const Paper = styled.div`
  width: 300px;
  height: 300px;
  background-color: beige;
  box-shadow: -1px 5px 33px 11px #565656;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const Button = styled.button`
  width: 150px;
  padding: 7px;
  border: none;
  border-radius: 15px;
  background-color: lime;
  font-weight: bold;
  font-family: "sans-serif";
  font-size: 16px;
  margin-top: 7px;
`;
