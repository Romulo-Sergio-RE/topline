import { LoginPagePropsType } from './types';
import * as S from './styles';
import Login from '../../templates/Login';


const LoginPage: React.FC<LoginPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <Login />
    </S.Container>
  );
};

export default LoginPage;
