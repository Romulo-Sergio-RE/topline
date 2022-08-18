import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    align-items: inherit;
    justify-content: space-around;
    width: 100%; 
    height: 20rem;
    padding:  0 1rem ;
    .titulo-topline{
        font-size: 2.5rem;
        font-weight: 700;
        background-image: linear-gradient(to bottom, #FF6700, #F12711);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 2rem 1.25rem 0 0;
    }
    .info-footer{
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin-top: 2rem;
        ul{
            list-style-type: none;
            margin: 0 1.875rem;
        }
        li{
            font-size: 1.375rem;
            font-weight: 300;
            color: #1F1D1D;
            margin:  0.625rem 0;
            :first-child{
                margin:  0 0 1.25rem 0;
                font-size: 1.875rem;
                color: #1F1D1D;
                font-weight: 400;
            }
        } 
    }
    .icone-footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 6.25rem;
        height: 6.25rem;
        margin-top: 3.5rem;
        img{
            margin:   0.5rem 0;
        }
    }
`;