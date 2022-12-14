import styled from "styled-components";

export const ContainerPontosTuristicos = styled.div`
    .titulo-principal{
        font-size: 1.875rem;
        color: #1F1D1D;
        text-align: center;
        margin-top: 2.5rem;
    }
    .grid-ponto-turisticos{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin-top: 2.5rem;
    }
    @media only screen and ( max-width:700px){
        .grid-ponto-turisticos{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: nowrap;
            flex-direction: column;
        }
    }
`;