import styled from "styled-components";
import { formatBreakpoint } from "../../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;

  .swiper {
    width: 330px;
    height: 420px;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.colors.blue};
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 24px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    padding: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
  @media ${formatBreakpoint("up", "tablet")} {
    padding: 90px 0;
    .swiper {
      width: 750px;
      height: 420px;
    }
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
export const ContainerCard = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(31, 29, 29, 0.3);
  @media ${formatBreakpoint("up", "tablet")} {
    width: 550px;
    height: 250px;
    flex-direction: row;
  }
`;
export const ImgCard = styled.img`
  width: 150px;
  height: 160px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(31, 29, 29, 0.3);
  @media ${formatBreakpoint("up", "tablet")} {
  }
`;
export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;
export const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 20px;
  }
`;
export const ContentText = styled.div`
  font-size: 14px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  @media ${formatBreakpoint("up", "tablet")} {
    font-size: 16px;
  }
`;
