import { createContext } from "react";
import { User } from "../types/user";

type authContext ={
    user: User | null,
    login: (email:string, senha:string) => boolean,
    cadastro: (email:string, senha:string) => boolean,
    deslogar: ()=>void;
}
export const AuthContext = createContext<authContext>(null!)