import { MainPagePropsType } from './types';
import * as S from './styles';
import FirstSection from '../../templates/FirstSection';
import FourthSection from '../../templates/FourthSection';

const MainPage: React.FC<MainPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <FourthSection />
    </S.Container>
  );
};

export default MainPage;
