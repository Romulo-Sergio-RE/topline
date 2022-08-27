import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    .titulo-Cadastro{
        font-size: 1.625rem;
        font-weight: bold;
        color: #004E98;
        text-transform: uppercase;
        margin: 1.563rem 0;
    }
    .container-inputs{
        width: 30rem;
        height: 35rem;
        background-color: #004E98;
        border-radius: 1.875rem;
        box-shadow: 0 0.375rem 1.25rem rgba(255, 103, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0  0 1.563rem 0;
    }
    @media only screen and (max-width: 480px){
        .container-inputs{
            width: 19rem;
            height: 35rem;
        }
    }
`;