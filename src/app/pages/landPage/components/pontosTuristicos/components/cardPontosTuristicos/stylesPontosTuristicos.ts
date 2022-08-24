import styled from "styled-components";

export const ContainerPontosTuristicos = styled.div`
    width: 40rem;
    margin-top: 2.5rem;
    .titulo{
        font-size: 1.5rem;
        font-weight: 600;
        color: #1F1D1D;
        text-align: center;
        margin-bottom: 1.875rem;
    }
    .container-img-texto{
        width: 40rem;
        height: 15.625rem;
        background-color: #3A6EA5;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 2.5rem;
    }
    .texto-pontoTuristico{
        width: 19.375rem;
        height: 8.438rem;
        color: #FFFFFF;
        font-size: 1.25rem;
        font-weight: 500;
    }
    @media only screen and ( max-width:700px){
        width: 30rem;
        .container-img-texto{
            width: 30rem;
            height: auto;
            background-color: #3A6EA5;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 2.5rem;
        }
        .texto-pontoTuristico{
            width: 19.375rem;
            height: 6rem;
            color: #FFFFFF;
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            margin-top: 20px;
        }
    }
    @media only screen and ( max-width:500px){
        width: 25rem;
        .container-img-texto{
            width: 25rem;
            height: auto;
            background-color: #3A6EA5;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 2.5rem;
        }
        .texto-pontoTuristico{
            width: 19.375rem;
            height: 6rem;
            color: #FFFFFF;
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            margin-top: 20px;
        }
    }
    @media only screen and ( max-width:380px){
        width: 20rem;
        .container-img-texto{
            width: 20rem;
            height: auto;
            background-color: #3A6EA5;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 1.5rem;
        }
        .texto-pontoTuristico{
            width: 17rem;
            height: 6.5rem;
            color: #FFFFFF;
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            margin-top: 20px;
        }
    }
`;