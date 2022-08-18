import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 1.875rem;
    
    .logo-topline{
        font-size: 2.5rem;
        font-weight: 700;
        background-image: linear-gradient(to bottom, #FF6700, #F12711);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-left: 1.25rem;
    }
    .button-header{
        width: 23.75rem;
        display: flex;
        justify-content:space-between;
        margin-right: 2.3rem;
    }
`;