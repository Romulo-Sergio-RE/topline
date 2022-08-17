
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandPage } from "../pages/landPage"


export const Rotas = ({ children }: any) =>{
    return(
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="/" element={<LandPage />}/>
            </Routes>
        </BrowserRouter>
    )
}