import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color:#82d2ca;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 800;
    animation: color-change 2s infinite;
@keyframes color-change {
  0% {
    color: rgb(255, 255, 255);
  }
  50% {
    color: rgb(255, 0, 0);
  }
  100% {
    color: rgb(255, 255, 255);
  }
}

`


export const Notification = () => {
  return (
    <Container>
        🚚💨 FREE DELIVERY FOR ORDERS ABOVE Rs.7,000
    </Container>
  )
}
