import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
     ${props}
    }
  `;
};

export const xr = (props) => {
  return css`
    @media only screen and (max-width: 415px) {
     ${props}
    }
  `;
};

export const res = (props) => {
  return css`
    @media only screen and (max-width: 845px) {
     ${props}
    }
  `;
};


export const window = (props) => {
  return css`
    @media only screen and (max-width: 1080px) {
     ${props}
    }
  `;
};

export const news = (props) => {
  return css`
    @media only screen and (max-width: 691px) {
     ${props}
    }
  `;
};