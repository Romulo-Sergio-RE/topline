import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "../context/authProvider"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import HomePage from "../pages/HomePage"

export const RoutePath = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="*" element={<LoginPage />} />
                    <Route path="/cadastrar" element={<RegisterPage />} />
                    <Route path="/entrar" element={<LoginPage />} />
                    <Route path="/principal" element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}