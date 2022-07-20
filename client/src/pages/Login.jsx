import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://img.freepik.com/free-photo/smiling-attractive-woman-stylish-colorful-outfit-jumping-with-shopping-bags-pink-yellow-background-polo-neck-striped-mini-skirt-shopaholic-sale-fashion-summer-trend_285396-2421.jpg?w=2000");
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid black;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 14px;
  font-size: 14px;
  border: none;
  width: 30%;
  border-radius: 15px;
  background-color: green;

  color: white;
  font-weight: bold;
  border: 2px solid white;

  &:disabled {
    color: #ff0000;
    cursor: not-allowed;
  }

  :hover {
    background-color: #000000;
   
  }
`;

const Link = styled.a`
  margin-top: 5px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
`;

const  Error = styled.span`
  color: red;
`
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispacth, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Incorrect username or password</Error>}
          <Link>FOGET PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
