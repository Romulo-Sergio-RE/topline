import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonPrimary } from "../../components/button"
import { HeaderLoginCadastro } from "../../components/headerLoginCadastro"
import { Inputs } from "../../components/inputs/inputs"
import { AuthContext } from "../../context/authContext"
import { Container } from "./styledPageLogin"

export const Login = () =>{

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const {login} = useContext(AuthContext);

    const navigate = useNavigate()
    
    const logarNoAplicativo = ()=>{
        const usuariologado = login(email,senha);
        if(usuariologado){
            navigate("/home")
        }else{
            alert("alguma coisa deu errado")
        }
    }
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
                            value={email}
                            onChange={setEmail}
                        />
                        <Inputs 
                            label="Senha:" 
                            inputType="text"
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={setSenha}
                        />
                    </div>
                    <ButtonPrimary 
                        titulo="entrar"
                        onClick={logarNoAplicativo}
                    />
                    <p className="naoConta-cadastro">Nao tem um conta?<a href="/cadastro">Cadastrar</a></p>
                </div>
            </Container>
        </div>
    )
}