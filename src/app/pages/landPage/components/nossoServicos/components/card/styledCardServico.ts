import styled from "styled-components";

export const ContainerCardServico = styled.div`
    width: 310px;
    height: 380px;
    border-radius: 20px;
    border: 3px solid #3A6EA5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .imagem-card{
        width: 150px;
        height: 150px;
    }
    .text-card{
        width: 300px;
        height: 120px;
        font-size: 20px;
        font-weight: 400;
        color: #1F1D1D;
        text-align: center;
        padding: 20px;
    }
`;
