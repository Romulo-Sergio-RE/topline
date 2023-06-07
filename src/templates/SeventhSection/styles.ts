import styled from "styled-components";
import { formatBreakpoint } from "../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 40px;
  background-color: ${(props) => props.theme.colors.blue};
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    gap: 60px;
  }
`;
export const Text = styled.div`
  width: 350px;
  font-size: 20px;
  font-family: 600;
  line-height: 140%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  @media ${formatBreakpoint("up", "mobile")} {
    width: 600px;
    font-size: 22px;
  }
  @media ${formatBreakpoint("up", "tablet")} {
    width: 650px;
    font-size: 24px;
  }
`;
