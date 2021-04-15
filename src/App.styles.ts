import { css } from "@emotion/css/dist/emotion-css.umd.min.js";

export const logoClass = css`
  margin-bottom: 45px;
  width: 93px;
  margin-top: auto;
  pointer-events: none;
  
  @media (max-width: 652px) {
    width: 63px;
    margin-bottom: 35px;
  }
`;

export const headlineClass = css`
  color: #F17B12;
  font-size: 7.2rem;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  
  span {
    color: #383838;
  }

  @media (max-width: 652px) {
    font-size: 4.2rem;
    margin-bottom: 20px;
  }
`;

export const paragraphClass = css`
  margin: 0;
  max-width: 500px;
  font-size: 2.4rem;
  text-align: center;
  color: #5d5d5d;

  :first-of-type {
    line-height: 1;
  }

  @media (max-width: 652px) {
    font-size: 1.6rem;
    max-width: 350px;
  }
`;

export const buttonsWrapperClass = css`
  display: flex;
  margin-top: auto;
`;

export const buttonClass = css`
  width: 65px;
  height: 65px;
  box-shadow: 0px 6px 17px -5px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  margin-right: 20px;
  color: #808080!important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background: #fff;
  
  :last-of-type {
    margin-right: 0;
  }
  
  :hover {
    color: #383838!important;
    box-shadow: 0px 6px 17px -5px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 652px) {
    width: 55px;
    height: 55px;
    font-size: 2.4rem;
    margin-right: 13px;
  }
`;