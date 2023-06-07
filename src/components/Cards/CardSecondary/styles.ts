import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.blueSecond};
  box-shadow: 0px 8px 20px 0px rgba(31, 29, 29, 0.3);
`;
export const ContainerImg = styled.img`
  width: 150px;
  height: 110px;
  border-radius: 8px;
`;
export const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 14px;
  line-height: 120%;
`;
