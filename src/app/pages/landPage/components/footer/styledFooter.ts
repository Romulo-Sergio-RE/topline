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
                margin:  0 0 1.2rem 0;
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
    @media only screen and ( max-width: 1050px){
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: auto;
        padding: 0;
        .info-footer{
            width: 500px; 
            align-items: baseline;
            justify-content: space-around;
            ul{
                margin: 0;
            }

        }
        .icone-footer{
            flex-direction: row;
            justify-content: space-around;
            margin-top: 0;
            img{
                margin-right: 1rem;
            }
        }
    }
    @media only screen and ( max-width: 768px){
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: auto;
        padding: 0;
        .info-footer{
            width: 200px;
            flex-direction: column;
            align-items: baseline;
            ul{
                margin: 0;
            }
        }
        .titulo-topline{
            margin: 0;
            font-size: 2rem;
        }
        .icone-footer{
            width: 50px;
            height: 6.25rem;
            flex-direction: column;
            margin-top: 3.5rem;
        }
    }
    @media only screen and ( max-width: 480px){
        .info-footer{
            li{
            font-size: 1rem;
                :first-child{
                    font-size: 1.5rem;
                }
            } 
        }
    }
`;