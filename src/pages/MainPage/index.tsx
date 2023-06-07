import { MainPagePropsType } from './types';
import * as S from './styles';
import FirstSection from '../../templates/FirstSection';
import FourthSection from '../../templates/FourthSection';
import SeventhSection from '../../templates/SeventhSection';
import SecondSection from '../../templates/SecondSection';
import ThirdSection from '../../templates/ThirdSection';

const MainPage: React.FC<MainPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SeventhSection />
    </S.Container>
  );
};

export default MainPage;
