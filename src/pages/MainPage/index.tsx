import { MainPagePropsType } from './types';
import * as S from './styles';
import Main from '../../templates/Main';

const MainPage: React.FC<MainPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <Main />
    </S.Container>
  );
};

export default MainPage;
