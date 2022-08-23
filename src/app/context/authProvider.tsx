import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../service/apiFireBase";
import { User } from "../types/user"
import { AuthContext } from "./authContext"

export const AuthProvider = ({ children }:any)=>{
    const [user, setUsers] = useState<User | null>(null);

    const login = (email: string, senha:string) =>{
        signInWithEmailAndPassword(auth, email, senha)
            .then(()=>{
                alert("login realizado com sucesso")
            })
            .catch((err) => alert(err.message))
        return true
    }

    const cadastro = (email: string, senha:string) =>{
        createUserWithEmailAndPassword(auth, email, senha)
            .then(()=>{
                alert("cadastro realizado com sucesso")
            })
            .catch(() => {return false})
        return true
    }
    const deslogar = () =>{

    }
    return(
        <AuthContext.Provider value={{user, login , cadastro, deslogar}}>
            {children}
        </AuthContext.Provider>
    )
}
