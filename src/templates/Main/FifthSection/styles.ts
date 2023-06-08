import styled from "styled-components";
import { formatBreakpoint } from "../../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 32px;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    gap: 56px;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 30px;
  }
`;
export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 32px;
  @media ${formatBreakpoint("up", "tablet")} {
    grid-template-columns: auto auto;
  }
`;
