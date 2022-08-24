import styled from "styled-components";

export const ContainerTopPaises = styled.div`
    margin: 5.625rem 0;
    .titulo-topPaises{
        font-size: 1.875rem;
        font-weight: 600;
        color: #004E98;
        text-align: center;
        margin: 3.125rem 0 4.375rem 0;
    }
    .grid-card-TopPaises{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    @media only screen and (max-width: 1050px) {
        .grid-card-TopPaises{
            display: grid;
            grid-template-columns:  auto auto;
            row-gap: 40px;
        }
    }  
    @media only screen and (max-width: 600px) {
        .grid-card-TopPaises{
            display: flex;
            align-items: center;
            justify-content: space-around; 
            flex-direction: column;
        }
    }   
`;