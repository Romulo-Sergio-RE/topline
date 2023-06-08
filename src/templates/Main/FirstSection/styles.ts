import styled from "styled-components";
import { formatBreakpoint } from "../../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0px;
  gap: 40px;
  @media ${formatBreakpoint("up", "tablet")} {
    flex-direction: row;
    padding: 90px 0px;
    gap: 24px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    gap: 60px;
  }
`;
export const ContainerText = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border-width: 2px 0px 2px 0px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.orange};
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  line-height: 145%;
  @media ${formatBreakpoint("up", "laptop")} {
    width: 450px;
    border-width: 3px 0px 3px 0px;
    line-height: 120%;
    font-size: 24px;
  }
`;
export const ContainerImage = styled.img`
  width: 280px;
  height: 180px;
  @media ${formatBreakpoint("up", "tablet")} {
    width: 380px;
    height: 280px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    width: 400px;
    height: 300px;
  }
`;
