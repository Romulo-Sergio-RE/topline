import styled from "styled-components";

export const ContainerMotivosViajar = styled.div`
    width: 100%;
    height: 40rem;
    background-color: #004E98;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .titulo{
        font-size: 1.875rem;
        font-weight: 600;
        color: #FFFFFF;
        text-align: center;
    }
    .container-img-infoMotivo{
        display: flex;
        justify-content: space-evenly;
        margin-top: 1.875rem;
    }
    .titulo-motivo{
        font-size: 1.5rem;
        font-weight: 400;
        color: #FFFFFF;
    }
    .texto-motivo{
        width: 31.25rem;
        color: #FFFFFF;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
    }
    .container-info-motivo{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;