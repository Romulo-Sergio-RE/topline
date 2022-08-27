import { useNavigate } from "react-router-dom"
import { ContainerHeader } from "./styledHeader"

export const HeaderLoginCadastro = ()=>{
    const navigate = useNavigate()

    const telaHome = () =>{
        navigate("/")
    }
    return(
        <ContainerHeader>
            <h3 
                className="titulo"
                onClick={telaHome}
            >TopLine</h3> 
        </ContainerHeader>
    )
}