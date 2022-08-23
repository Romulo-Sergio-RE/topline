
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cadastro } from "../pages/cadastro"
import { HomePage } from "../pages/homePage"
import { LandPage } from "../pages/landPage"
import { Login } from "../pages/login"


export const Rotas = ({ children }: any) =>{
    return(
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="/" element={<LandPage />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/home" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}