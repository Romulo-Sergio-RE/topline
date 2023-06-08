import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, createContext, ReactNode, useContext } from "react"
import { auth } from "../service/apiFireBase";
import { User } from "../types/user"
import { useNavigate } from "react-router-dom";


type AuthContextProps = {
    children: ReactNode
}
type ContextProps = {
    user: User | any,
    login: (email: string, senha: string) => void,
    cadastro: (email: string, senha: string) => void,
    deslogar: () => void;
}
const AuthContext = createContext<ContextProps>(null!)

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [user, setUsers] = useState<User>(null!);
    const navigate = useNavigate();
    const login = async (email: string, senha: string) => {
        await signInWithEmailAndPassword(auth, email, senha)
            .then(async () => {
                alert("login realizado com sucesso")
                navigate("/principal")
            })
            .catch((err) => {
                alert(err.message)
                navigate("/entrar")
            })
    }
    const cadastro = async (email: string, senha: string) => {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then(async () => {
                alert("cadastro realizado com sucesso")
                navigate("/entrar")
            })
            .catch((err) => {
                alert(err.message)
                navigate("/cadastrar")
            })

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
export { useAuth }
