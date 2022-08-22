import { useState } from "react"
import { ButtonPrimary } from "../../components/button"
import { HeaderLoginCadastro } from "../../components/headerLoginCadastro"
import { Inputs } from "../../components/inputs/inputs"
import { Container } from "./styledPageLogin"

export const  Login = () =>{

    const [dados, setDados] = useState("")
    console.log(dados)
    return(
        <div>
            <HeaderLoginCadastro />
            <Container>
                <h4 className="titulo-login">Login</h4>

                <div className="container-inputs">
                    <div>
                        <Inputs 
                            label="email:" 
                            inputType="text"
                            placeholder="Digite seu email"
                            value={dados}
                            onChange={setDados}
                        />
                        <Inputs 
                            label="Senha:" 
                            inputType="text"
                            placeholder="Digite sua Senha"
                            value={dados}
                            onChange={setDados}
                        />
                    </div>
                    <ButtonPrimary 
                        titulo="entrar"
                        onClick={()=>alert("login com sucesso")}
                    />
                    <p className="naoConta-cadastro">Nao tem um conta?<a href="/cadastro">Cadastrar</a></p>
                </div>
            </Container>
        </div>
    )
}