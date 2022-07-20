import React from "react";
import styled from "styled-components";

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
  width: 40%;
  background-color: rgba(255,255,255,0.7);
  border: 2px solid black;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 10px ;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 13px;
  margin: 10px 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  border: none;
  
  border-radius: 15px;
  background-color: #000000;
  color: white;
  font-weight: bold;
  border: 2px solid white;

  &:hover{
    background-color: #ff0000;
    color: #ffffff;
  }

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account , i consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
