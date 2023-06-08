import styled from "styled-components";
import { formatBreakpoint } from "../../utils";

export const ContainerInternal = styled.div`
  width: 100%;
  .nav__menuOpen {
    height: 60px;
    background-color: ${(props) => props.theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: right;
    .link {
      display: none;
      font-size: 1.125rem;
      font-weight: 500;
    }
    .icone__close {
      display: none;
    }
    .icone__menu {
      width: 1.5rem;
      height: 1.5rem;
      color: #fff;
      margin-right: 0.625rem;
    }
  }
  .nav__Down {
    width: 100%;
    height: 13.125rem;
    background-color: ${(props) => props.theme.colors.blue};
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    .link {
      width: 100%;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.blue};
      color: #fff;
      text-decoration: none;
      font-size: 1.125rem;
      font-weight: 500;
      :active {
        color: red;
        background-color: green;
      }
    }
    .icone__close {
      display: block;
      position: absolute;
      top: 15px;
      right: 10px;
      width: 1.5rem;
      height: 1.5rem;
      color: #fff;
      margin: 0;
    }
    .icone__menu {
      display: none;
    }
  }

  @media ${formatBreakpoint("up", "mobile")} {
    .nav__menuDown {
      display: none;
    }
    .nav__menuOpen {
      align-items: center;
      justify-content: end;
      height: 70px;
      .link {
        display: block;
        color: #fff;
        padding: 0 10px;
        font-size: 16px;
      }
      .icone__menu {
        display: none;
      }
    }
  }
  @media ${formatBreakpoint("up", "tablet")} {
    .nav__menuOpen {
      .link {
        display: block;
        color: #fff;
        padding: 0 20px;
        font-size: 18px;
      }
    }
  }
`;
export const Logo = styled.div`
  position: absolute;
  top: 5px;
  left: 37%;
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  padding: 10px 0;
  @media ${formatBreakpoint("up", "mobile")} {
    padding: 0;
    position: none;
    left: 5%;
    top: 20px;
  }
`;
