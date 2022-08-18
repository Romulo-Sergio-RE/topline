import styled from "styled-components";

export const ContainerMotivosViajar = styled.div`
    width: 100%;
    height: 640px;
    background-color: #004E98;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .titulo{
        font-size: 30px;
        font-weight: 600;
        color: #FFFFFF;
        text-align: center;
    }
    .container-img-infoMotivo{
        display: flex;
        justify-content: space-evenly;
        margin-top: 30px;
    }
    .titulo-motivo{
        font-size: 24px;
        font-weight: 400;
        color: #FFFFFF;
    }
    .texto-motivo{
        width: 500px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 500;
        line-height: 140%;
    }
    .container-info-motivo{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;