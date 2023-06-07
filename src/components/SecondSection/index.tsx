import { SecondSectionPropsType } from './types';
import * as S from './styles';

const SecondSection: React.FC<SecondSectionPropsType> = ({
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

export default SecondSection;
