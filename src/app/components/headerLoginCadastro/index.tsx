import { useNavigate } from "react-router-dom"
import { ContainerHeader } from "./styledHeader"

export const HeaderLoginCadastro = ()=>{
    const navigate = useNavigate()

    const telaHome = () =>{
        navigate("/")
    }
    return(
        <ContainerHeader>
            <div className="teste">
                <a href="/"className="icon-voltar">voltar</a>
                <h3 
                    className="titulo"
                    onClick={telaHome}
                >TopLine</h3> 
            </div>
        </ContainerHeader>
    )
}