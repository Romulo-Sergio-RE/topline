import { ContainerBnt } from "./bntHeader"

interface BntProps{
    titulo:string,
    onClick: ()=>void
}

export const BntHeader: React.FC<BntProps> = ( props ) =>{
    return(
        <ContainerBnt onClick={props.onClick}>{props.titulo}</ContainerBnt>
    )
}