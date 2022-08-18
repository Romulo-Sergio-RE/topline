import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 30px;
    
    .logo-topline{
        font-size: 40px;
        font-weight: 700;
        background-image: linear-gradient(to bottom, #FF6700, #F12711);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-left:20px
    }
    .button-header{
        width: 380px;
        display: flex;
        justify-content:space-between;
        margin-right: 20px;
    }
`;