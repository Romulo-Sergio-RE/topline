import { ContainerInput } from "./styledInputs"

interface InputsProps{
    label: string,
    inputType: "text" | "password" | "date",
    placeholder: string,
    value: string,
    onChange: (novoValor: string)=>void,
}

export const Inputs:React.FC<InputsProps> = (props) =>{
    return(
        <ContainerInput>
            <label className="label">{props.label}</label>
            <input 
                className="input" 
                type={props.inputType}
                placeholder={props.placeholder  }
                value={props.value}
                onChange={(e)=> props.onChange(e.target.value)}
            />
        </ContainerInput>
    )
}