import { HeaderPropsType } from './types';
import * as S from './styles';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header: React.FC<HeaderPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const [Nav, setNav] = useState(true);
  return (
    <S.ContainerInternal>
      <div className={Nav ? "nav__menuOpen" : "nav__Down"}>
        <S.Logo>
          TopLine
        </S.Logo>
        <div>
          <AiOutlineClose
            className={"icone__close"}
            onClick={() => setNav(!Nav)}
          />
          <AiOutlineMenu
            className={"icone__menu"}
            onClick={() => setNav(!Nav)}
          />
        </div>

        <Link to={"/"} className='link'>Entrar</Link>
        <Link to={"/"} className='link'>Cadastrar</Link>
      </div>
    </S.ContainerInternal>
  );
};

export default Header;
