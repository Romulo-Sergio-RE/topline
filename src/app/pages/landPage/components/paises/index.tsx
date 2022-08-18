import { CardTopPaises } from "./components/card"
import { ContainerTopPaises } from "./styledTopPaises"

export const TopPaises =() =>{

    const topPaises = [
        {
            id:1,
            titulo:"japao",
            imagemBandeira:"./image/japao.png"
        },
        {
            id:2,
            titulo:"alemanha",
            imagemBandeira:"./image/alemanha.png"
        },
        {
            id:3,
            titulo:"canada",
            imagemBandeira:"./image/canada.png"
        },
        {
            id:4,
            titulo:"china",
            imagemBandeira:"./image/china.png"
        },
    ]
    return(
        <ContainerTopPaises>
            <h3 className="titulo-topPaises">Top Paises</h3>

            <div className="grid-card-TopPaises">
                {
                    topPaises.map((paises)=>{
                        return(
                            <CardTopPaises 
                                key={paises.id}
                                titulo={paises.titulo}
                                imagem={require(`${paises.imagemBandeira}`)}
                            />
                        )
                    })
                }
                
            </div>
        </ContainerTopPaises>
    )
}