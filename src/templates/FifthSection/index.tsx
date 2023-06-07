import { FifthSectionPropsType } from './types';
import * as S from './styles';
import CardThird from '../../components/Cards/CardThird';

const FifthSection: React.FC<FifthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const arrayInfoCads = [
    {
      "id": 0,
      "title": "Rio de Janeiro - BRASIL",
      "text": "O Rio de Janeiro é uma enorme cidade litorânea no Brasil, famosa por suas praias de Copacabana e Ipanema, a estátua do Cristo Redentor de 38 metros no topo do Corcovado e o Pão de Açúcar",
      "imgPlace": require("../../assets/image/RioDeJaneiro.png"),
    },
    {
      "id": 1,
      "title": "Necrópole de Gizé - EGITO",
      "text": "Este complexo de monumentos antigos inclui os três complexos de pirâmides conhecidas como as Grandes Pirâmides.",
      "imgPlace": require("../../assets/image/NecropoleDeGize.png"),
    },
    {
      "id": 2,
      "title": "Ilha de Jeju - COREIA DO SUL",
      "text": "A província de Jeju engloba a ilha sul-coreana de Jeju, no Estreito da Coréia. É conhecida por seus resorts de praia e paisagem vulcânica de crateras e tubos de lava semelhantes a cavernas.",
      "imgPlace": require("../../assets/image/IlhaDeJeju.png"),
    },
    {
      "id": 3,
      "title": "Catedral de Colônia - ALEMANHA",
      "text": "Símbolo da cidade, a Catedral de Colônia é a terceira igreja mais alta de todo o mundo  além de ser considerada Patrimônio da Humanidade.",
      "imgPlace": require("../../assets/image/CatedralDeColonia.png"),
    },
  ]
  const readArrayInfo = () => (
    arrayInfoCads.map(({ id, title, text, imgPlace }) => {
      return (
        <CardThird
          key={id}
          title={title}
          text={text}
          imgPlace={imgPlace}
        />
      )
    })
  )
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Title>Top Pontos Turísticos</S.Title>
      <S.ContainerCards>{readArrayInfo()}</S.ContainerCards>
    </S.Container>
  );
};

export default FifthSection;
