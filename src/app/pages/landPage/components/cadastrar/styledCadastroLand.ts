import styled from "styled-components";

export const ContainerCadastro = styled.div`
    width: 100%;
    height: 34.375rem;
    background-color: #004E98;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0 3.75rem;
    margin: 2rem 0 2rem 0;
    .texto{
        width: 51.25rem;
        font-size: 1.875rem;
        color: #FFFFFF;
        text-align: center;
    }
    .button{
        width: 20rem;
        height: 5rem;
        background-color: #FF6700;
        border-radius: 1.25rem;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0.5rem 1.25rem rgba(31, 29, 29, 0.3);
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
    }
    @media only screen and (max-width: 830px){
        .texto{
            width: 36rem;
        }
    }
    @media only screen and (max-width: 600px){
        .texto{
            width: 30rem;
        }
    }
    @media only screen and (max-width: 480px){
        .texto{
            width: 19rem;
            font-size: 1.2rem;
        }
        .button{
            width: 18rem;
        }
    }
`;