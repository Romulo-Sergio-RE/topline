import styled from "styled-components";
import { formatBreakpoint } from "../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 48px;
  background-color: ${(props) => props.theme.colors.blue};
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    gap: 64px;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`;
export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  @media ${formatBreakpoint("up", "tablet")} {
    flex-direction: row;
  }
  @media ${formatBreakpoint("down", "laptop")} {
    gap: 48px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    gap: 64px;
  }
`;
export const ContainerImg = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 5px 5px 20px 0px rgba(255, 103, 0, 0.2);
  @media ${formatBreakpoint("up", "mobile")} {
    width: 300px;
    height: 350px;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    width: 350px;
    height: 400px;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  @media ${formatBreakpoint("up", "laptop")} {
    gap: 48px;
  }
`;
export const Info = styled.div`
  width: 355px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media ${formatBreakpoint("up", "mobile")} {
    align-items: baseline;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    width: 450px;
  }
`;
export const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`;
export const InfoText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  @media ${formatBreakpoint("up", "mobile")} {
    text-align: left;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    line-height: 140%;
  }
`;
