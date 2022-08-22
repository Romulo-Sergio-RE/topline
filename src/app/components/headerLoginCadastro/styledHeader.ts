import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 4.375rem;
    background-color: #F5F5F5;
    box-shadow:  0 0.25rem 0.938rem rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: left;
    .teste{
        width: 43.75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 0 0 1.875rem;
    }
    .titulo{
        font-size: 2rem;
        font-weight: 700;
        background-image: linear-gradient(to bottom, #FF6700, #F12711);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
    }
    .icon-voltar{
        color: #FF6700;
        cursor: pointer;
        text-decoration: none;
    }
`;