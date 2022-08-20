import { useNavigate } from "react-router-dom"
import { BntHeader } from "../button"
import { Container } from "./headerStyle"

export const Header = () =>{

    const navigate = useNavigate();

    const telaLogin = () =>{
        navigate("/login")
    }
    const telaCadastro = () =>{
        navigate("/cadastro")
    }
    return(
        <Container>
            <div className="logo-topline">TopLine</div>

            <div className="button-header">
                <BntHeader 
                    titulo={"login"} 
                    onClick={telaLogin}
                />
                <BntHeader 
                    titulo={"cadastro"} 
                    onClick={telaCadastro}
                />
            </div>
        </Container>
    )
}