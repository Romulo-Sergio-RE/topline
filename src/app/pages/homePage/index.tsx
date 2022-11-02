import { signOut } from "firebase/auth"
import { JSXElementConstructor, Key, ReactElement, ReactFragment, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { auth } from "../../service/apiFireBase"

export const HomePage = ()=>{

    const navigate = useNavigate()
    const {deslogar, user} = useContext(AuthContext);
    const handleOut = ()=>{
        deslogar()
        navigate("/")
    }

    return(
        <div>
            <div>bem vindo</div>
            <button onClick={handleOut}>sair</button>
        </div>
    )
}