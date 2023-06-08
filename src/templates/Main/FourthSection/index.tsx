import { FourthSectionPropsType } from './types';
import * as S from './styles';

const FourthSection: React.FC<FourthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const arrayInfo = [
    {
      "id": 0,
      "title": "Conhecer novas culturas",
      "text": "  Um dos motivos para viajar que é muito fascinante a possibilidade de ampliar a minha visão de mundo e as minhas perspectivas sobre outras culturas.",
    },
    {
      "id": 1,
      "title": "Aprender novos idiomas",
      "text": "A melhor maneira de aprender ou praticar um idioma novo é passando um tempo onde ele é falado. O seu vocabulário vai aumentar e você vai se sentir mais à vontade para falar esse idioma."
    },
    {
      "id": 2,
      "title": "Ter histórias para contar",
      "text": "As histórias de viagens são as melhores podem passar horas e horas de conversa. Quando viajamos, aumentamos nosso repertório e voltamos com recordações únicas, desde um “perrengue” até a realização de um sonho."
    },
  ]
  const readArrayInfo = () => (
    arrayInfo.map(({ id, title, text }) => {
      return (
        <S.Info key={id}>
          <S.InfoTitle>{title}</S.InfoTitle>
          <S.InfoText>{text}</S.InfoText>
        </S.Info>
      )
    })
  )
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Title>Motivos para Viajar Todo Ano</S.Title>
      <S.ContainerContent>
        <S.ContainerImg
          alt=""
          src={require("../../../assets/image/ImgReasonsToTravel.png")}
        />
        <S.ContainerInfo>{readArrayInfo()}</S.ContainerInfo>
      </S.ContainerContent>
    </S.Container>
  );
};

export default FourthSection;
