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
    console.log(user[0].email)
    return(
        <div>
            homePage
            <div>bem vindo{user[1].email}</div>

            <button onClick={handleOut}>sair</button>
        </div>
    )
}