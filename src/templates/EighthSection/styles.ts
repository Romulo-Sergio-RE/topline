import styled from "styled-components";
import { formatBreakpoint } from "../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  gap: 24px;
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    gap: 32px;
    align-items: start;
    flex-direction: row;
  }
  @media ${formatBreakpoint("up", "laptop")} {
    gap: 64px;
  }
`;
export const TitleLogo = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.orange};
  cursor: default;
`;
export const ContainerContent = styled.div`
  width: 140px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media ${formatBreakpoint("up", "tablet")} {
    width: auto;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
  cursor: default;
`;
export const ContainerSubtitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  :hover {
    text-decoration: underline solid ${(props) => props.theme.colors.orange} 2px;
    text-underline-offset: 5px;
  }
`;
export const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;
export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;
export const ImgAppMobile = styled.img`
  width: 150px;
  height: 40px;
  cursor: pointer;
  @media ${formatBreakpoint("up", "laptop")} {
    width: 170px;
    height: 50px;
  }
`;
