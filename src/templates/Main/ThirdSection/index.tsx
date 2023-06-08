import { ThirdSectionPropsType } from './types';
import * as S from './styles';
import CardSecondary from '../../../components/Cards/CardSecondary';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useMediaQuery } from '../../../hooks';

const ThirdSection: React.FC<ThirdSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery("mobile");
  const isTablet = useMediaQuery("tablet");

  const arrayInfoCard = [
    {
      "id": 0,
      "imgFlags": require("../../../assets/image/japao.png"),
      "title": "Japao",
    },
    {
      "id": 1,
      "imgFlags": require("../../../assets/image/canada.png"),
      "title": "Canada",
    },
    {
      "id": 2,
      "imgFlags": require("../../../assets/image/coreia.png"),
      "title": "Coreia",
    },
    {
      "id": 3,
      "imgFlags": require("../../../assets/image/alemanha.png"),
      "title": "Alemanha",
    },
  ]
  const readArraySwiper = () => (
    arrayInfoCard.map(({ id, imgFlags, title }) => {
      return (
        <SwiperSlide key={id}>
          <CardSecondary
            title={title}
            imgFlags={imgFlags}
          />
        </SwiperSlide>
      )
    })
  )
  const readArray = () => (
    arrayInfoCard.map(({ id, imgFlags, title }) => {
      return (
        <CardSecondary
          title={title}
          imgFlags={imgFlags}
        />
      )
    })
  )
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Title>
        Top Paises
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

export default ThirdSection;
