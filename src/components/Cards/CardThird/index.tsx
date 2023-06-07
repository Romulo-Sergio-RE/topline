import { CardThirdPropsType } from './types';
import * as S from './styles';

const CardThird: React.FC<CardThirdPropsType> = ({
  children,
  innerRef,
  title,
  text,
  imgPlace,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Title>{title}</S.Title>
      <S.ContainerCard>
        <S.ContainerImg
          alt=""
          src={imgPlace}
        />
        <S.Text>{text}</S.Text>
      </S.ContainerCard>
    </S.Container>
  );
};

export default CardThird;
