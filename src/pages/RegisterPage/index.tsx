import { RegisterPagePropsType } from './types';
import * as S from './styles';
import Register from '../../templates/Register';

const RegisterPage: React.FC<RegisterPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <Register />
    </S.Container>
  );
};

export default RegisterPage;
