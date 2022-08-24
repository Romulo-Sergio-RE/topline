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
    @media only screen and (max-width:925px){
        .container{
            width: 46rem;
        }
    }
    @media only screen and (max-width:768px){
        .imagem-carrossel{
            width: 15rem;
            height: 15rem;
        }
        .container{
            width: 30rem;
            height: 30rem;
            padding: 10px;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
        }
        .container-info{
            width: 20rem;
            height: 9.75rem;
            text-align: center;
        }
        .container-info-titulo{
            font-size: 1.625rem;
            margin-bottom: 1.25rem;
        }
        .container-info-texto{
            font-size: 1.1rem;
            width: 21rem;
        }
    }
    @media only screen and (max-width:480px){
        .imagem-carrossel{
            width: 12rem;
            height: 12rem;
        }
        .container{
            width: 20rem;
            padding: 15px;
        }
        .container-info-texto{
            font-size: 1rem;
            width: 20rem;
        }
    }
`;