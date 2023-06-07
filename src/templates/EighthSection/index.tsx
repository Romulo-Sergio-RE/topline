import { EighthSectionPropsType } from './types';
import * as S from './styles';

const EighthSection: React.FC<EighthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const arrayInfoCard = [
    {
      "id": 0,
      "title": "Contato",
      "subtitle": [
        "Email",
        "Telefone",
        "Endereço",
      ],
    },
    {
      "id": 1,
      "title": "Sobre",
      "subtitle": [
        "FaQ",
        "Quem Somos",
        "O que fazemos",
      ],
    },
    {
      "id": 2,
      "title": "Redes Sociais",
      "subtitle": [
        "Instagram",
        "Youtube",
        "Twitter",
      ],
    },
  ]
  const readArrayFooter = () => (
    arrayInfoCard.map(({ id, title, subtitle }) => {
      return (
        <S.ContainerContent>
          <S.Title>Contato</S.Title>
          <S.ContainerSubtitle>
            {subtitle.map((title) => {
              return (
                <S.Subtitle>{title}</S.Subtitle>
              )
            })}
          </S.ContainerSubtitle>
        </S.ContainerContent>
      )
    })
  )
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.TitleLogo>TopLine</S.TitleLogo>
      {readArrayFooter()}
      <S.ContainerImg>
        <S.ImgAppMobile alt="" src={require("../../assets/image/IconGooglePlay.png")} />
        <S.ImgAppMobile alt="" src={require("../../assets/image/IconAppStore.png")} />
      </S.ContainerImg>
    </S.Container>
  );
};

export default EighthSection;
