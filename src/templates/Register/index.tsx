import { RegisterPropsType } from './types';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import FirstSection from './FirstSection';

const Register: React.FC<RegisterPropsType> = ({
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

export default Register;
