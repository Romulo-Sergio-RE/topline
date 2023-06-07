import styled from "styled-components";
import { formatBreakpoint } from "../../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;
export const ContainerCard = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.blueSecond};
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(31, 29, 29, 0.3);
  @media ${formatBreakpoint("up", "laptop")} {
    width: 430px;
  }
`;
export const ContainerImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.white};
`;
export const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  line-height: 120%;
`;
