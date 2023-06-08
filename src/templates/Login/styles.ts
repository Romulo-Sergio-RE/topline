import styled from "styled-components";

export const Container = styled.div``;
export const ContainerHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: baseline;
  background-color: ${(props) => props.theme.colors.blue};
  padding-left: 40px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
