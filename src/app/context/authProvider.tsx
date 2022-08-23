import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { useState } from "react"
import { auth, db } from "../service/apiFireBase";
import { User } from "../types/user"
import { AuthContext } from "./authContext"

export const AuthProvider = ({ children }:any)=>{
    const [user, setUsers] = useState<User | any[]>([]);
    const [listUsers, setListUsers]= useState<User | any[]>([]);
    const test = ()=>{
        onValue(ref(db, `/${auth.currentUser?.uid}/`), snapshot =>{
            setListUsers([]);
            const data = snapshot.val();
            if(data !== null){
                Object.values(data).map(users => {
                    setListUsers((oldArray: any) =>[...oldArray, users]);
                })
            }
        })
    }
    const login = (email: string, senha:string) =>{
        setUsers(listUsers)
        signInWithEmailAndPassword(auth, email, senha)
            .then(()=>{
                alert("login realizado com sucesso")
                test()
            })
            .catch((err) => alert(err.message))      
        return true
    }
    const cadastro = async (email: string, senha:string, nome:string) =>{

        await createUserWithEmailAndPassword(auth, email, senha)
            .then(async() => {
                alert("cadastro realizado com sucesso")
                await set(ref(db, `/${auth.currentUser?.uid}/${0}`),{
                    email: email, 
                    senha:senha, 
                    nome:nome,
                    uid: 0,
                });
            })
            .catch(() => {return false})
        return true
    }

    const deslogar = () =>{
        signOut(auth)
            .then(()=>{
                alert("deslogou com sucesso")
            })
            .catch((err) => alert(err.message))
    }
    return(
        <AuthContext.Provider value={{user, login , cadastro, deslogar}}>
            {children}
        </AuthContext.Provider>
    )
}
