import { CardServico } from "./components/card"
import { ContainerGridServico, Container } from "./styledServico"

export const Servicos = () =>{
    const servicos = [
        {
            id:1,
            texto:"Encontrar informações sobre os pontos turísticos",
            icone:"./image/local.png",
        },
        {
            id:2,
            texto:"Conseguir criar um roteiro de forma mais rápida e com todas as informações necessária",
            icone:"./image/aviao.png",
        },
        {
            id:3,
            texto:"Conseguir ter informações sobre os países, como eventos, culturais e pontos turísticos",
            icone:"./image/mundo.png",
        },
        {
            id:4,
            texto:"Consegue encontrar e usar os roteiros criados por outras pessoas",
            icone:"./image/documento.png",
        },
    ]
    return(
        <Container> 

            <h3 className="titulo-servico">O que temos para oferecer</h3>
            <ContainerGridServico>
                {
                    servicos.map((servico)=>{
                        return(
                            <CardServico 
                                key={servico.id}
                                imagem={require(`${servico.icone}`)} 
                                texto={servico.texto}
                            />
                        )
                    })
                }
            </ContainerGridServico>
        </Container>
    )
}