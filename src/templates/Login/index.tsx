import { LoginPropsType } from './types';
import * as S from './styles';
import FirstSection from './FirstSection';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login: React.FC<LoginPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.ContainerHeader>
        <Link to={"/"} className='link'>
          <BsArrowLeft size={24} />
          Voltar
        </Link>
      </S.ContainerHeader>
      <FirstSection />
    </S.Container>
  );
};

export default Login;
