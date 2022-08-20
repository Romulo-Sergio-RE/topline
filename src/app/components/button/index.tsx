import { ContainerBnt } from "./styledBnt"
interface ButtonProps{
    titulo: string
    onClick:()=>void
}
export const ButtonPrimary:React.FC<ButtonProps> = ( props )=>{
    return(
        <ContainerBnt onClick={props.onClick}>
            <h3 className="titulo-button">{props.titulo}</h3>
        </ContainerBnt>
    )
}