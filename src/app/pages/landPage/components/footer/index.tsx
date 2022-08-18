import { ContainerFooter } from "./styledFooter"

export const Footer = () =>{
    return(
        <ContainerFooter>
            <h4 className="titulo-topline">TopLine</h4>

            <div className="info-footer">
                <ul>
                    <li>Contato</li>
                    <li>Email</li>
                    <li>Telefone</li>
                </ul>
                <ul>
                    <li>Sobre</li>
                    <li>FaQ</li>
                    <li>Quem Somos?</li>
                </ul>
                <ul>
                    <li>Redes Sociais</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div className="icone-footer">
                <img src={require("./image/appStore.png")} alt="imagem-app-store"/>
                <img src={require("./image/googlePlay.png")} alt="imagem-google-play"/>
            </div>
        </ContainerFooter>
    )
}