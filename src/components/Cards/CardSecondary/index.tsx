import { CardSecondaryPropsType } from './types';
import * as S from './styles';

const CardSecondary: React.FC<CardSecondaryPropsType> = ({
  children,
  innerRef,
  imgFlags,
  title,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.ContainerImg
        alt=""
        src={imgFlags}
      />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default CardSecondary;
