import styled from "styled-components";

export const ContainerBnt = styled.div`
    width: 20rem;
    height: 4rem;
    background-color: #FF6700;
    box-shadow: 0 0.313rem 0.938rem rgba(242, 242, 242, 0.25);
    border-radius: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 0 0;
    cursor: pointer;
    .titulo-button{
        font-size: 1.2rem;
        font-weight: 700;
        color: #F2F2F2;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 480px){
        width: 15rem;
        height: 3.5rem;
        .titulo-button{
            font-size: 1.1rem;
        }
    }
`;