import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import img from "../assets/img.png"
import {mobile} from "../responsive"
import {xr} from "../responsive"
import {res} from "../responsive"
const Container = styled.div`
  display: flex;
  height: auto;
  background-color: #24292f;
  ${mobile({
    flexDirection:"column"
    })}
      ${xr({
    flexDirection:"column"
    })}
      ${res({
    flexDirection:"column"
    })}
`;

const Left = styled.div`
  flex: 1;
  margin-left: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #ffffff;
`;
const Desc = styled.p`
width: 80%;
  margin-top: 30px;
  font-weight: 500;
  color: white;
`;
const SocialContainer = styled.h4`
  margin-top: 30px;
  display: flex;
`;
const SocialIcon = styled.h4`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const Center = styled.div`
  flex: 1;
  color: white;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  color: white;
  padding: 20px;
`;


const ContactItem = styled.li`
  display: flex;
  list-style: none;
  padding: 10px;
`;

const Payment = styled.div`
  margin: 10px;
  padding: 0;
`
const Img = styled.img`
  width: 60%;
  height: 50px;
`

const Fotter = () => {
  return (
    <Container>
      <Left>
        <Logo>ISURU.</Logo>
        <Desc>
          Our dresses are locally designed, in limited edition and crafted in
          beautiful lux fabrics from vintage satin and silk to everyday easy
          viscose. Wear them your way, with a blazer for work, with sneakers to
          lunch or with a statement heel for an event.
        </Desc>
        <SocialContainer>
          <SocialIcon color="0077ff">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="fc466b">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="89f7fe">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="ff0004">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Explore</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Widhlist</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
          Colombo,Srilanka
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +94 76 528 0144
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />{" "}
          Isurusajith68@gmail.com
        </ContactItem>
        <Payment>
        <Img  src={img} alt="img" />
        </Payment>

          
        
      </Right>
    </Container>
  );
};

export default Fotter;
