import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, createContext, ReactNode, useContext } from "react"
import { auth } from "../service/apiFireBase";
import { User } from "../types/user"

type AuthContextProps = {
    children: ReactNode
}
type ContextProps = {
    user: User | any,
    login: (email: string, senha: string) => Promise<boolean>,
    cadastro: (email: string, senha: string, nome: string) => Promise<boolean>,
    deslogar: () => void;
}
export const AuthContext = createContext<ContextProps>(null!)

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [user, setUsers] = useState<User>(null!);

    const login = async (email: string, senha: string) => {
        await signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                alert("login realizado com sucesso")
            })
            .catch((err) => alert(err.message))
        return true
    }
    const cadastro = async (email: string, senha: string, nome: string) => {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then(async () => {
                alert("cadastro realizado com sucesso")
            })
            .catch(() => { return false })
        return true
    }
    const deslogar = () => {
        signOut(auth)
            .then(() => {
                alert("deslogou com sucesso")
            })
            .catch((err) => alert(err.message))
    }
    return (
        <AuthContext.Provider value={{ user, login, cadastro, deslogar }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}
