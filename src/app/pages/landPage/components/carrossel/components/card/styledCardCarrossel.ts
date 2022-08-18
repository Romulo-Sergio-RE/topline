import styled from "styled-components";

export const ContainerCardCarrossel = styled.div`
    width: 100%;
    height: 38rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .container{
        width: 53.75rem;
        height: 26rem;
        border-radius: 1.875rem;
        box-shadow: 0 0.5rem 1.25rem rgba(31, 29, 29, 0.3);
        background: linear-gradient(to bottom, rgba(255, 103, 0, 1), rgba(241, 39, 17, 1));
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .container-info{
        width: 23.313rem;
        height: 9.75rem;
        text-align: center;
    }
    .container-info-titulo{
        font-size: 1.625rem;
        color: #1F1D1D;
        margin-bottom: 1.25rem;
    }
    .container-info-texto{
        font-size: 1.1rem;
        width: 25rem;
        font-weight: 400;
        color: #1F1D1D;
    }
`;