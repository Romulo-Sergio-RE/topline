import { ThirdSectionPropsType } from './types';
import * as S from './styles';

const ThirdSection: React.FC<ThirdSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      {children}
    </S.Container>
  );
};

export default ThirdSection;
