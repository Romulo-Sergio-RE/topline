import { FirstSectionPropsType } from './types';
import * as S from './styles';

const FirstSection: React.FC<FirstSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.ContainerImage
        alt=''
        src={require("../../assets/image/ImgAdventure.png")}
      />
      <S.ContainerText>
        A TopLine vai ajudar a criar seus roteiros de forma mais simples e
        rápida com todas as informações possíveis sobre Pontos Turísticos,
        Países e Hospedagem.
      </S.ContainerText>
    </S.Container>
  );
};

export default FirstSection;
