import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    @media only screen and (max-width: 600px){
        display: flex;
        align-items: center;
        flex-direction:column;
        justify-content: center;
        .logo-topline{
            margin: 3.75rem 0 0.625rem 0;
        }
        .button-header{
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction:column;
            margin: 0 0 0.625rem 0;
        }
    }
`;
