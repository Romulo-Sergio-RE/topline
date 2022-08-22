import { useState } from "react"
import { ButtonPrimary } from "../../components/button"
import { HeaderLoginCadastro } from "../../components/headerLoginCadastro"
import { Inputs } from "../../components/inputs/inputs"
import { Container } from "./styledPageCadastro"

export const Cadastro =() =>{
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaNovamente, setSenhaNovamente] = useState("")

    
    return(
        <div>
            <HeaderLoginCadastro /> 
            
            <Container>
            <h4 className="titulo-Cadastro">Cadastro</h4>
                <div className="container-inputs">
                    <Inputs 
                        label="Nome:" 
                        inputType="text"
                        placeholder="Digite seu Nome"
                        value={nome}
                        onChange={setNome}
                    />
                    <Inputs 
                        label="Email:" 
                        inputType="text"
                        placeholder="Digite sua Email"
                        value={email}
                        onChange={setEmail}
                    />
                    <Inputs 
                        label="Senha:" 
                        inputType="text"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={setSenha}
                    />
                    <Inputs 
                        label="Senha Novamente:" 
                        inputType="text"
                        placeholder="Digite sua Senha Novamente"
                        value={senhaNovamente}
                        onChange={setSenhaNovamente}
                    />     
                    <ButtonPrimary 
                        titulo="Cadastrar"
                        onClick={()=>alert("cadastro com sucesso")}
                    />
                </div>
            </Container>
        </div>
    )
}