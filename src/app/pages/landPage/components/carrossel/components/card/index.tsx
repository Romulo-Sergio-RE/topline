import { ContainerCardCarrossel } from "./styledCardCarrossel"

export const CardCarrossel = () =>{
    return(
        <ContainerCardCarrossel>
            <div className="container">
                <img 
                    alt="imaga-card"
                    src={require("../../image/imagemCarrossel.png")}
                />
                <div className="container-info">
                    <h4 className="container-info-titulo">João Pedro</h4>
                    <p className="container-info-texto"> 
                        “Com a topLine, finalmente consigo fazer 
                        minhas pesquisas sobre locais para onde 
                        posso viajar, com mais facilidade e também 
                        consigo criar meus roteiros bem mais fácil 
                        e rápido do que antes.”
                    </p>
                </div>
            </div>
        </ContainerCardCarrossel>
    )
}