import styled from "styled-components";

export const ContainerRadioInput = styled.div`
    .titulo{
        font-size:1.125rem;
        font-weight: 500;
        color: #000000;
        margin-bottom: 0.5rem;
        :first-letter{
            text-transform: uppercase;
        }
    }
    .input-radio{
        width: 0.938rem;
        height: 0.938rem;
        -webkit-appearance: none;
        background-color: white;
        border-radius: 1.25rem;
        border: 0.125rem solid #FF6700;
        cursor: pointer;
    }
    .input-radio:checked{
        background-color: #FF6700;
    }
    .label-inputRadio{
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0 1.563rem 0 0.438rem;
    }
`;