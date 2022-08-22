import { useState } from "react"
import { ContainerRadioInput } from "./inputRadio"

interface InputRadioProps{

}

export const InputRadio:React.FC<InputRadioProps> = (props) =>{

    const [homem, setHomem]=useState(false)
    const [mulher, setMulher]=useState(false)
    const homemChecked = (e:any)=>{
        setHomem(e.target.checked)
        setMulher(false)
    }
    const mulherChecked = (e:any)=>{
        setMulher(e.target.checked)
        setHomem(false)
    }
    return(
        <ContainerRadioInput>
            <h4 className="titulo">Genero:</h4>
            <div className="container-label-input">
                <input 
                    className="input-radio" 
                    type="radio"
                    checked={homem}
                    onChange={(e)=>homemChecked(e)}
                />
                <label className="label-inputRadio">Homem</label>
                <input 
                    className="input-radio" 
                    type="radio"
                    checked={mulher}
                    onChange={(e)=>mulherChecked(e)}
                />
                <label className="label-inputRadio">Mulher</label>
            </div>
        </ContainerRadioInput>
    )
}