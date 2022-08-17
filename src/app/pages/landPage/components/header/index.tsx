import { BntHeader } from "../button"
import { Container } from "./headerStyle"

export const Header = () =>{
    return(
        <Container>
            <div className="logo-topline" onClick={()=>{alert("teste home logo")}}>TopLine</div>

            <div className="button-header">
                <BntHeader titulo={"login"} onClick={()=>alert("tela login")}/>
                <BntHeader titulo={"cadastro"} onClick={()=>alert("tela cadastro")}/>
            </div>
        </Container>
    )
}