import { ContainerPontosTuristicos } from "./stylesPontosTuristicos"

interface CardPontosTuristicosProps{
    imagem:string,
    titulo: string,
    texto: string
}

export const CardPontosTuristicos: React.FC<CardPontosTuristicosProps> = (props) =>{
    return(
        <ContainerPontosTuristicos>
            <h4 className="titulo">{props.titulo}</h4>
            <div className="container-img-texto">
                <img 
                    src={props.imagem} 
                    alt="img pontos turisticos"
                />
                <p className="texto-pontoTuristico">{ props.texto}</p>
            </div>
        </ContainerPontosTuristicos>
    )
}