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
    @media only screen and (max-width: 1050px){
        .titulo{
            font-size: 1.6rem;
            font-weight: 600;
            color: #FFFFFF;
            text-align: center;
        }
        .container-img-infoMotivo{
            display: flex;
            justify-content: space-evenly;
            margin-top: 0;
        }
        .imagem{
            width: 370px;
            height: 400px;
        }
        .titulo-motivo{
            font-size: 1.3rem;
            font-weight: 400;
            color: #FFFFFF;
        }
        .texto-motivo{
            width: 31.25rem;
            font-size: 1rem;
            font-weight: 500;
            line-height: 140%;
            color: #FFFFFF;
        }
    }
    @media only screen and (max-width: 990px){
        height: 50rem;
        .imagem{
            width: 330px;
            height: 350px;
        }
        .container-img-infoMotivo{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
        }
        .titulo-motivo{
            font-size: 1.3rem;
            font-weight: 400;
            color: #FFFFFF;
            margin: 8px 0;
        }
        .texto-motivo{
            font-size: 1rem;
            font-weight: 400;
            color: #FFFFFF;
            width: 25rem;
        }
    }
    @media only screen and (max-width: 480px){
        .container-info-motivo{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
        }
        .texto-motivo{
            font-size: 1rem;
            font-weight: 400;
            color: #FFFFFF;
            width: 23rem;
        }
        .imagem{
            width: 300px;
            height: 330px;
        }
        .titulo{
            font-size: 1.3rem;
            font-weight: 600;
            color: #FFFFFF;
            text-align: center;
        }
    }
`;