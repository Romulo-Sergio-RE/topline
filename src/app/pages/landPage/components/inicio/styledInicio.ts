import styled from "styled-components";

export const ContainerInicio = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3.125rem;
    .container-texto-inicio{
        width: 31.063rem;
        height: 19.563rem;
        border-radius: 1.25rem;
        border-top: 0.125rem solid rgba(255, 103, 0, 0.9);
        border-bottom: 0.125rem solid rgba(255, 103, 0, 0.9);
        padding: 1.25rem;
        text-align: center;
    }
    .texto-inicio{
        font-size: 1.875rem;
        font-weight: 700;
        line-height: 140%;
        color: #004E98; 
    }
    .imagem-inicio{
        width: 37.5rem;
        height: 23.75rem;
    }
`;