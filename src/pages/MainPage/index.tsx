import { MainPagePropsType } from './types';
import * as S from './styles';

const MainPage: React.FC<MainPagePropsType> = ({
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

export default MainPage;
