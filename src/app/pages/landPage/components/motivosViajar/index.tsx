import { ContainerMotivosViajar } from "./stylesMotiposViajar"

export const MotivosViajar = () =>{
    return(
        <ContainerMotivosViajar>
            <h3 className="titulo">Motivos para Viajar Todo Ano</h3>
            <div className="container-img-infoMotivo">
                <img 
                    src={require("./image/motivo.png")} 
                    alt="img"
                />
                <div className="container-info-motivo">
                    <h4 className="titulo-motivo">Conhecer novas culturas</h4>
                    <p className="texto-motivo">Um dos motivos para viajar que é muito fascinante a possibilidade de ampliar a minha visão de mundo e as minhas perspectivas sobre outras culturas.</p>
                    <h4 className="titulo-motivo">Aprender novos idiomas</h4>
                    <p className="texto-motivo">A melhor maneira de aprender ou praticar um idioma novo é passando um tempo onde ele é falado. O seu vocabulário vai aumentar e você vai se sentir mais à vontade para falar esse idioma.</p>
                    <h4 className="titulo-motivo">Ter histórias para contar</h4>
                    <p className="texto-motivo">As histórias de viagens são as melhores – podem passar horas e horas de conversa. Quando viajamos, aumentamos nosso repertório e voltamos com recordações únicas, desde um “perrengue” até a realização de um sonho.</p>
                </div>
            </div>
        </ContainerMotivosViajar>
    )
}