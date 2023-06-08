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
    gap: 64px;
  }
  .swiper {
    width: 100%;
    height: 350px;
  }
  .swiper-slide {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
export const ContainerWeb = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  @media ${formatBreakpoint("up", "laptop")} {
    width: 1120px;
  }
  transition: all 2s;
  :hover {
    transform: scale(1.01);
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 24px;
  }
`;
