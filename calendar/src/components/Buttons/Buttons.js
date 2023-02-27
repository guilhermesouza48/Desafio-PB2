import styled from "styled-components";

export const Buttons = styled.button`
  background-image: linear-gradient(to bottom, #ff2d04, #c13216);
  border: 2px solid;
  border-image: linear-gradient(to bottom, #ff2d04, #c13216);
  border-radius: 50px;
  width: 471px;
  height: 67px;
  font-family: "mulish", sans-serif;
  font-style: bold;
  font-size: 32px;
  font-weight: 700;
  color: white;
  cursor: pointer;

  a:-webkit-any-link {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const LinkButton = styled.link`
  color: white;
  font-weight: 600;
  margin-top: 10px;
`;
