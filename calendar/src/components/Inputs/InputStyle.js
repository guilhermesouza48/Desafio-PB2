import styled from "styled-components";

export const Selectionstyle = styled.select`
  border-radius: 10px;
  border: 1px #fece00 solid;
  background-color: #ffffff;
  width: 240px;
  height: 45px;
  padding-left: 25px;
  text-decoration: none;
  color: #000000;
  margin-right: 3px;
`;


export const Inputs = styled.input`
  border-radius: 50px;
  border: 1px #ffffff solid;
  background-color: #29292c;
  width: 379px;
  height: 60px;
  padding-left: 25px;
  text-decoration: none;
  color: #e0e0e0;

  ::placeholder {
    color: #ffffff;
    font-family: "mulish", sans-serif;
  }
`;

export const InputsDash = styled(Inputs)`
  border-radius: 10px;
  border: 1px #fece00 solid;
  background-color: #ffffff;
  width: 391px;
  height: 45px;
  padding-left: 25px;
  text-decoration: none;
  color: #000000;
  margin-left: 24px;
  margin-right: 3px;

  ::placeholder {
    color: #000000;
    font-family: "mulish", sans-serif;
  }
`;

