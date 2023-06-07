import { HomePagePropsType } from './types';
import * as S from './styles';

const HomePage: React.FC<HomePagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      Home
    </S.Container>
  );
};

export default HomePage;
