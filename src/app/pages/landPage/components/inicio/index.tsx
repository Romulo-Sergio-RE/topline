import { ContainerInicio } from "./styledInicio"

export const Inicio = ()=>{
    return(
        <ContainerInicio>
            <div className="container-texto-inicio">
                <p className="texto-inicio">
                    A TopLine vai ajudar a criar seus 
                    roteiros de forma mais simples e rápida 
                    com todas as informações possíveis sobre 
                    Pontos Turísticos, Países e Hospedagem.
                </p>
            </div>
            <img 
                className="imagem-inicio"
                src={require("./Image/imagem-inicio.png")} 
                alt="imagem de inicio"
            />
        </ContainerInicio>
    )
}