import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonPrimary } from "../../components/button"
import { HeaderLoginCadastro } from "../../components/headerLoginCadastro"
import { Inputs } from "../../components/inputs/inputs"
import { AuthContext } from "../../context/authContext"
import { Container } from "./styledPageCadastro"

export const Cadastro =() =>{
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaNovamente, setSenhaNovamente] = useState("")

    const {cadastro} = useContext(AuthContext)

    const navigate = useNavigate()

    const cadastrarUsuario = () =>{
        if(senha === senhaNovamente){
            const usuarioCadastrado = cadastro(email,senha)
            if(usuarioCadastrado){
                navigate("/login")
            }else{
                alert("alguma coisa deu errado")
            }
        }
    }

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
                        onClick={cadastrarUsuario}
                    />
                </div>
            </Container>
        </div>
    )
}