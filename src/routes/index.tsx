import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "../context/authProvider"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import HomePage from "../pages/HomePage"
import MainPage from "../pages/MainPage"
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';

export const RoutePath = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <AuthProvider>
                    <Routes>
                        <Route path="*" element={<MainPage />} />
                        <Route path="/cadastrar" element={<RegisterPage />} />
                        <Route path="/entrar" element={<LoginPage />} />
                        <Route path="/principal" element={<HomePage />} />
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}