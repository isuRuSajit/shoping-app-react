import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import {mobile} from "../responsive"
import {xr} from "../responsive"
import {news} from "../responsive"
const Container = styled.div`
  height: 60vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
margin-top: 70px;
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({
     fontSize:"29px",
    })}
     ${xr({
     fontSize:"29px",
    })}
    ${news({
     fontSize:"29px",
    })}
`;
const Discription = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({
     fontSize:"10px",
    })}
      ${xr({
     fontSize:"10px",
    })}
     ${news({
     fontSize:"10px",
    })}
`;

const InputContainer = styled.div`
margin-top: 20px;
  width: 30%;
  height: 40px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  border: 1.5px solid black;
  ${mobile({
     fontSize:"10px",
     width:"80%"
    })}
     ${xr({
     fontSize:"10px",
     width:"80%"
    })}
     ${news({
     fontSize:"10px",
     width:"80%"
    })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  ${mobile({
     fontSize:"10px",
    })}
     ${xr({
     fontSize:"10px",
    })}
    ${news({
     fontSize:"10px",
    })}
`;
const Button = styled.button`
  background-color: #ffffff;
  color: #000000;
  flex: 0.6;
  border: none;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Discription>Get timely updates from your favorite products.</Discription>
      <InputContainer>
        <Input placeholder="Enter Your Email" type="email"/>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
