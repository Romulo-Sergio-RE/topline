import styled from "styled-components";

export const Container = styled.div`
    margin: 5rem 0;
    .titulo-servico{
        font-size: 1.875rem;
        font-weight: 600;
        color: #004E98;
        text-align: center;
        margin: 2.5rem 0 4.375rem 0;
    }
    @media only screen and (max-width: 480px) {
        .titulo-servico{
            font-size: 1.6rem;
            font-weight: 600;
            color: #004E98;
            text-align: center;
            margin: 2.5rem 0 4.375rem 0;
        }
    }
`;
export const ContainerGridServico = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 50px;
    }   
    @media only screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: space-around; 
        flex-direction: column;
    }  
`;