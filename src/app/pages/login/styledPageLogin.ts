import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .titulo-login{
        font-size: 1.625rem;
        font-weight: bold;
        color: #004E98;
        text-transform: uppercase;
        margin: 1.563rem 0;
    }
    .container-inputs{
        width: 29.563rem;
        height: 28.125rem ;
        background-color: #004E98;
        border-radius: 1.25rem;
        box-shadow: 0 0.375rem 1.25rem rgba(255, 103, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }
    .naoConta-cadastro{
        font-size: 1rem;
        color: #FFFFFF;
        a{
            font-size: 1.125rem;
            font-weight: bold;
            text-transform: uppercase;
            color: #FF6700;
            margin-left: 0.313rem;
            text-decoration: none;
            :hover{
                color: #FFFFFF;
            }
        }
    }
`;