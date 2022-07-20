import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { xr } from "../responsive";
import { news } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #24292f;
  color: white;
  font-weight: 500;
  ${xr({})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
  ${xr({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  margin-top: -10px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
  ${xr({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  background-color: #24292f;
  border: none;
  margin-top: -10px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    backgroundColor: "#24292f",
    border: "none",

    marginLeft: "1px",
  })}
  ${xr({
    backgroundColor: "#24292f",
    border: "none",

    marginLeft: "1px",
  })}
`;

const Input = styled.input`
  border: none;
  padding: 5px;
  ${mobile({
    width: "80%",
  })}
  ${xr({
    width: "80%",
  })}
     ${news({
    width: "80%",
  })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-top: -25px;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "26px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -20px;
  ${mobile({
    marginRight: "15px",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "10px",
  })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search
              style={{ color: "White", cursor: "pointer", fontSize: 18 }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ISURU.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem style={{color:`white`}}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="white"/>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
