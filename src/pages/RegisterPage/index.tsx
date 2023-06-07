import { RegisterPagePropsType } from './types';
import * as S from './styles';

const RegisterPage: React.FC<RegisterPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      Resgiter
    </S.Container>
  );
};

export default RegisterPage;
