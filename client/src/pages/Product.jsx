import { Add, AddShoppingCartOutlined, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Notification } from "../components/Notification";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../reqMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0px 50 px;
`;

const Image = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: fill;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Desc = styled.p`
  margin: 10px 0px;
`;

const Price = styled.div`
  font-size: 40px;
  font-weight: 200;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 9px;
  padding: 9px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  color: black;
  justify-content: space-between;
`;

const AmontContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  flex: 1;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  margin-left: 120px;
  width: 130px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Product = () => {
  const Location = useLocation();
  const id = Location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQunatity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQunatity(quantity - 1);
    } else {
      setQunatity(quantity + 1);
    }
  };

const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <Container>
      <Navbar />
      <Notification />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> RS : {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmontContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmontContainer>
            <Button onClick={handleClick}>
              <AddShoppingCartOutlined /> Add To Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Fotter />
    </Container>
  );
};

export default Product;
