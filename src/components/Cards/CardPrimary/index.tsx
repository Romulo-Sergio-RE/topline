import { CardPrimaryPropsType } from './types';
import * as S from './styles';

const CardPrimary: React.FC<CardPrimaryPropsType> = ({
  children,
  innerRef,
  imgCard,
  text,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.ContainerImg alt="" src={imgCard} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default CardPrimary;
