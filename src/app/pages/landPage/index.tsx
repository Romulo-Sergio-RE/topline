import { Header } from "./components/header"
import { Inicio } from "./components/inicio"
import { Servicos } from "./components/nossoServicos"
import { ContainerLandPage } from "./styleLandPage"

export const LandPage = ()=>{
    return(
        <ContainerLandPage>
            <Header />
            <Inicio />
            <Servicos />
        </ContainerLandPage>
    )
}