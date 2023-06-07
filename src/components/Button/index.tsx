import { ButtonPropsType } from './types';
import * as S from './styles';

const Button: React.FC<ButtonPropsType> = ({
  children,
  innerRef,
  title,
  backColor,
  fontColor,
  widthBtn,
  heightBtn,
  ...rest
}) => {
  return (
    <S.Container
      {...rest}
      ref={innerRef}
      widthBtn={widthBtn}
      heightBtn={heightBtn}
      backColor={backColor}
      fontColor={fontColor}
    >
      {title}
    </S.Container>
  );
};

export default Button;
