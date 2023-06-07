import { SecondSectionPropsType } from './types';
import * as S from './styles';
import CardPrimary from '../../components/Cards/CardPrimary';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useMediaQuery } from '../../hooks';



const SecondSection: React.FC<SecondSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery("mobile");
  const isTablet = useMediaQuery("tablet");

  const arrayInfoCard = [
    {
      "id": 0,
      "imgCard": require("../../assets/image/IconRoad.png"),
      "text": "Encontrar informações sobre os pontos turísticos",
    },
    {
      "id": 1,
      "imgCard": require("../../assets/image/IconPlane.png"),
      "text": "Encontrar informações sobre os pontos turísticos",
    },
    {
      "id": 2,
      "imgCard": require("../../assets/image/IconEarth.png"),
      "text": "Conseguir ter informações sobre os países, como eventos, culturais e pontos turísticos",
    },
    {
      "id": 3,
      "imgCard": require("../../assets/image/IconDocument.png"),
      "text": "Consegue encontrar e usar os roteiros criados por outras pessoas.",
    },
  ]
  const readArraySwiper = () => (
    arrayInfoCard.map(({ id, imgCard, text }) => {
      return (
        <SwiperSlide key={id}>
          <CardPrimary
            imgCard={imgCard}
            text={text}
          />
        </SwiperSlide>
      )
    })
  )
  const readArray = () => (
    arrayInfoCard.map(({ id, imgCard, text }) => {
      return (
        <CardPrimary
          imgCard={imgCard}
          text={text}
        />
      )
    })
  )
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Title>
        O que temos para oferecer
      </S.Title>

      {isTablet ?
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={isMobile ? 1 : 2}
        >
          {readArraySwiper()}
        </Swiper>
        :
        <S.ContainerWeb>
          {readArray()}
        </S.ContainerWeb>
      }


    </S.Container>
  );
};

export default SecondSection;
