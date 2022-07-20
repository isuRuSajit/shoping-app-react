import { Add, Remove } from "@mui/icons-material";
import React, { useEffect,useState } from "react";
import styled from "styled-components";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import { Notification } from "../components/Notification";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../reqMethods";
import { useNavigate } from "react-router";




const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.span``;

const TopText = styled.span`
  cursor: pointer;
  font-weight: 600;
  margin: 0px 10px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 180px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductID = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;

  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #000000;
  opacity: 50%;
  height: 1;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  margin-left: 50px;
  padding: 17px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 15px;
  text-transform: uppercase;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();


  

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/Success", {
          replace: true ,
          stripeData: res.data,
          products: cart.total, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken,  cart.total,navigate ]);
  return (
    <Container>
      <Navbar />
      <Notification />
      <Wrapper>
        <Title>CART</Title>
        <Top>
          <TopButton>Continue shoping</TopButton>
          <TopTexts>
            <TopText>Shopping bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductID>
                      <b>Id:</b> {product._id}
                    </ProductID>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>RS: {product.price * product.quantity}</ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemPrice>Rs: {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 800</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shiping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -800</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemPrice>Rs: {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="ISURU"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total *100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button >CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Fotter />
    </Container>
  );
};

export default Cart;
