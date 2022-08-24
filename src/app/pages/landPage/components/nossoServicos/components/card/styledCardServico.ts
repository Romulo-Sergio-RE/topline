import styled from "styled-components";

export const ContainerCardServico = styled.div`
    width: auto;
    height: auto;
    border-radius: 1.25rem;
    border: 0.188rem solid #3A6EA5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .imagem-card{
        width: 9rem;
        height: 9rem;
    }
    .text-card{
        width: 18.75rem;
        height: 7.5rem;
        font-size: 1.25rem;
        font-weight: 400;
        color: #1F1D1D;
        text-align: center;
        padding: 1.25rem;
    }
    @media only screen and (max-width: 700px) {
        .imagem-card{
            width: 7rem;
            height: 7rem;
        }
        .text-card{
            width: 17rem;
            height: 6rem;
            font-size: 1rem;
            font-weight: 400;
            color: #1F1D1D;
            text-align: center;
            padding: 1.25rem;
        }
    }
`;
