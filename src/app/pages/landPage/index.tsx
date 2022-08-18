import { CadastroLandPage } from "./components/cadastrar"
import { Carrossel } from "./components/carrossel"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Inicio } from "./components/inicio"
import { MotivosViajar } from "./components/motivosViajar"
import { Servicos } from "./components/nossoServicos"
import { TopPaises } from "./components/paises"
import { PontosTuristico } from "./components/pontosTuristicos"
import { ContainerLandPage } from "./styleLandPage"

export const LandPage = ()=>{
    return(
        <ContainerLandPage>
            <Carrossel />
        </ContainerLandPage>
    )
}