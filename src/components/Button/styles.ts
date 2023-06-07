import styled from "styled-components";
import { ButtonPropsStyled } from "./types";

export const Container = styled.button<ButtonPropsStyled>`
  width: ${(props) => props.widthBtn};
  height: ${(props) => props.heightBtn};
  border-radius: 8px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(31, 29, 29, 0.3);
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.fontColor};
`;
