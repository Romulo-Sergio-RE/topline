import { useState } from "react"
import { ButtonPrimary } from "../../components/button"
import { HeaderLoginCadastro } from "../../components/headerLoginCadastro"
import { InputRadio } from "../../components/inputs/inputRadio"
import { Inputs } from "../../components/inputs/inputs"

export const  Login = () =>{

    const [dados, setDados] = useState("")
    console.log(dados)
    return(
        <div>
            <HeaderLoginCadastro />
            <h4 className="titulo-login">Login</h4>

            <div>

            </div>
            <ButtonPrimary 
                titulo="entrar"
                onClick={()=>alert("login com sucesso")}
            />
            <Inputs 
                label="email:" 
                inputType="text"
                placeholder="Digite seu email"
                value={dados}
                onChange={setDados}
            />
            <InputRadio />
        </div>
    )
}