import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data/data";
import {mobile} from '../responsive'
import {xr} from '../responsive'
import {res} from '../responsive'
import {window} from '../responsive'
const Container = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  overflow: hidden;
  position: relative;
  ${mobile({
  display:"none"
  })}
    ${xr({
  display:"none"
  })}
    ${res({
  display:"none"
  })}
   ${window({
  display:"none"
  })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=> props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
 
`;
const Image = styled.img`
  height: 80%;
  margin-left: 130px;
  ${mobile({
    marginLeft:"0px",
    width: "185px",
    height:"300px"
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  margin-bottom: 150px;
  padding: 50px;

`;

const Title = styled.h1`
  font-size: 60px;
 
  ${mobile({
   fontSize:"15px",
  marginTop:"-180px",
  
  })}
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({
    display:"none"
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  cursor: pointer;
  border-radius: 20px;
  border:2px solid black;
  transition: all 0.7s ease;
  color: white;
  ${mobile({
   fontSize:"8px",
  marginTop:"20px",
  
  })}
  
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() =>handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() =>handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
