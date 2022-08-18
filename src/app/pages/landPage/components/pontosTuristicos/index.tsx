import { CardPontosTuristicos } from "./components/cardPontosTuristicos"
import { ContainerPontosTuristicos } from "./styledPontosTuristicos"

export const PontosTuristico = () =>{
    const pontos =[
        {
            id:1,
            titulo:"Rio de Janeiro - BRASIL",
            texto:"O Rio de Janeiro é uma enorme cidade litorânea no Brasil, famosa por suas praias de Copacabana e Ipanema, a estátua do Cristo Redentor de 38 metros no topo do Corcovado e o Pão de Açúcar",
            image:"./image/rio.png",
        },
        {
            id:2,
            titulo:"Catedral de Colônia - ALEMANHA",
            texto:"Símbolo da cidade, a Catedral de Colônia é a terceira igreja mais alta de todo o mundo – além de ser considerada Patrimônio da Humanidade.",
            image:"./image/catedral.png",
        },
        {
            id:3,
            titulo:"Ilha de Jeju - COREIA DO SUL",
            texto:"A província de Jeju engloba a ilha sul-coreana de Jeju, no Estreito da Coréia. É conhecida por seus resorts de praia e paisagem vulcânica de crateras e tubos de lava semelhantes a cavernas.",
            image:"./image/jeju.png",
        },
        {
            id:4,
            titulo:"Necrópole de Gizé - EGITO",
            texto:"Este complexo de monumentos antigos inclui os três complexos de pirâmides conhecidas como as Grandes Pirâmides, ",
            image:"./image/gize.png",
        },
    ]
    return(
        <ContainerPontosTuristicos>
            <h3 className="titulo-principal">Top Pontos Turisticos</h3>
            <div className="grid-ponto-turisticos">
                {
                    pontos.map((ponto)=>{
                        return(
                            <CardPontosTuristicos 
                                key={ponto.id}
                                imagem={require(`${ponto.image}`)}
                                titulo={ponto.titulo}
                                texto={ponto.texto}
                            />
                        )
                    })
                }
            </div>
        </ContainerPontosTuristicos>
    )
}