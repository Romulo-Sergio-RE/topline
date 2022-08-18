import { ContainerCadastro } from "./styledCadastroLand"

export const CadastroLandPage = () =>{
    return(
        <ContainerCadastro>
            <p className="texto"> 
                Agora que você viu tudo o que a 
                Topline consegue fazer, está na hora de se 
                cadastrar e ter uma experiência incrível na 
                hora de criar seus roteiros de viagem.
            </p>
            <div className="button" onClick={()=>alert("a")}>Cadastrar</div>
        </ContainerCadastro>
    )
}