import styled from "styled-components";

export const ContainerInicio = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    .container-texto-inicio{
        width: 497px;
        height: 313px;
        border-radius: 20px;
        border-top: 2px solid rgba(255, 103, 0, 0.9);
        border-bottom: 2px solid rgba(255, 103, 0, 0.9);
        padding: 20px;
        text-align: center;
    }
    .texto-inicio{
        font-size: 30px;
        font-weight: 700;
        line-height: 140%;
        color: #004E98; 
    }
    .imagem-inicio{
        width: 600px;
        height: 380px;
    }
`;