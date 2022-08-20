import { ButtonPrimary } from "../../components/button"
import { HeaderLoginCadastro } from "../../components/headerLoginCadastro"

export const  Login = () =>{
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
             
        </div>
    )
}