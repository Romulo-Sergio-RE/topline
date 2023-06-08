import { SixthSectionPropsType } from './types';
import * as S from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useMediaQuery } from '../../../hooks';


const SixthSection: React.FC<SixthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery("tablet");

  const arrayInfoCard = [
    {
      "id": 0,
      "imgCard": require("../../../assets/image/personaJoao.png"),
      "namePersona": "Joao",
      "text": "“Com a topLine, finalmente consigo fazer minhas pesquisas sobre locais para onde posso viajar, com mais facilidade e também consigo criar meus roteiros bem mais fácil e rápido do que antes.”",
    },
    {
      "id": 1,
      "imgCard": require("../../../assets/image/personaJoao.png"),
      "namePersona": "Joao",
      "text": "“Com a topLine, finalmente consigo fazer minhas pesquisas sobre locais para onde posso viajar, com mais facilidade e também consigo criar meus roteiros bem mais fácil e rápido do que antes.”",
    },
    {
      "id": 2,
      "imgCard": require("../../../assets/image/personaJoao.png"),
      "namePersona": "Joao",
      "text": "“Com a topLine, finalmente consigo fazer minhas pesquisas sobre locais para onde posso viajar, com mais facilidade e também consigo criar meus roteiros bem mais fácil e rápido do que antes.”",
    },
  ]
  const readArrayInfoCard = () => (
    arrayInfoCard.map(({ id, imgCard, namePersona, text }) => {
      return (
        <SwiperSlide key={id}>
          <S.ContainerCard>
            <S.ImgCard alt="" src={imgCard} />
            <S.ContainerContent>
              <S.ContentTitle>{namePersona}</S.ContentTitle>
              <S.ContentText>{text}</S.ContentText>
            </S.ContainerContent>
          </S.ContainerCard>
        </SwiperSlide>
      )
    })
  )
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Title>Avaliações dos Clientes</S.Title>
      <Swiper
        pagination={isMobile ? true : false}
        navigation={isMobile ? false : true}
        modules={[Pagination, Navigation]}
      >
        {readArrayInfoCard()}
      </Swiper>
    </S.Container>
  );
};

export default SixthSection;
