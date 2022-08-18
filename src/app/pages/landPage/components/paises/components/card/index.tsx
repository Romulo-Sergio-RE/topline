import { type } from "os"
import { ContainerCard } from "./styledCardTopPaises"

interface cardTopPaisesProps{
    imagem: string,
    titulo: string,
}
export const CardTopPaises: React.FC<cardTopPaisesProps> =(props) =>{
    return(
        <ContainerCard>
            <img 
                className="image-card-topPaises" 
                src={props.imagem}
                alt="imagem dos paises"
            />
            <h5 className="titulo-card-topPaises">{ props.titulo }</h5>
        </ContainerCard>
    )
}