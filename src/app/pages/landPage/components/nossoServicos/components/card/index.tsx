import { ContainerCardServico } from "./styledCardServico"

interface CardServicoProps{
    texto: string,
    imagem: string,
}

export const CardServico: React.FC<CardServicoProps> = (props) =>{
    return(
        <ContainerCardServico>
            <img 
                className="imagem-card" 
                src={props.imagem}
                alt="imagem do card"
            />

            <p className="text-card">{ props.texto }</p>
        </ContainerCardServico>
    )
}