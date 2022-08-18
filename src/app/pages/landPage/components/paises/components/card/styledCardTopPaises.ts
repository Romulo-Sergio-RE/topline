import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 300px;
    height: 320px;
    background-color: #3A6EA5;
    border-radius: 25px;
    box-shadow: 0 8px 20px rgba(31, 29, 29, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    .image-card-topPaises{
        width: 216px;
        height: 162px;
        border-radius: 10px;
    }
    .titulo-card-topPaises{
        font-size: 20px;
        font-size: 600;
        color: #FFFFFF;
        text-transform: uppercase;
    }
`;