import styled from "styled-components";
import { formatBreakpoint } from "../../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
  }
`;
export const ContainerContent = styled.form`
  width: 350px;
  height: 400px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(31, 29, 29, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 23px;
  @media ${formatBreakpoint("up", "tablet")} {
    width: 400px;
    height: 450px;
    border-radius: 12px;
  }
`;
export const ContentLabelInput = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: absolute;
    padding: 5.3125rem 0;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.875rem;
    padding-left: 10px;
  }
`;
export const Label = styled.label`
  font-weight: 500;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.white};
`;
export const Input = styled.input`
  width: 18.125rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  padding: 0 0 0 0.9375rem;
  border: none;
  z-index: 2;
  :focus {
    outline: none;
  }
`;
export const Button = styled.button`
  width: 290px;
  height: 50px;
  border-radius: 0.625rem;
  font-weight: 700;
  font-size: 1.25rem;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.25);
  border: none;
  margin-top: 0.5rem;
`;
