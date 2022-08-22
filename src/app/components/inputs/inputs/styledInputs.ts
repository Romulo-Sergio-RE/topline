import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: column;
    .label{
        font-size: 1.125rem;
        font-weight: 500;
        color: #FFFFFFFF;
        margin: 0.8rem 0 ;
        :first-letter{
            text-transform: uppercase;
        }
    }
    .input{
        width: 20rem;
        height: 3.438rem;
        border-radius: 0.625rem;
        border: 0.125rem solid rgba(255, 103, 0, 1);
        background-color: #F2F2F2;
        font-size: 1.125rem;
        padding: 0 0.3rem;
        :focus{
            ::placeholder{
                color: rgba(0, 0, 0, 0.5);
            }
            border: 0.125rem solid rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 0 0;
            outline: 0;
        }
        ::placeholder{
            color: rgba(255, 103, 0, 0.6);
        }

    }
    .input[type="date"]{
        color: rgba(255, 103, 0, 0.6);
    }
    .input[type="date"]::-webkit-inner-spin-button,
    .input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

`;