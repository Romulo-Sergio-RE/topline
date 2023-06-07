import { MainPagePropsType } from './types';
import * as S from './styles';
import FirstSection from '../../templates/FirstSection';
import FourthSection from '../../templates/FourthSection';
import SeventhSection from '../../templates/SeventhSection';
import SecondSection from '../../templates/SecondSection';
import ThirdSection from '../../templates/ThirdSection';
import FifthSection from '../../templates/FifthSection';
import EighthSection from '../../templates/EighthSection';

const MainPage: React.FC<MainPagePropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      {/* <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SeventhSection /> */}
      <EighthSection />
    </S.Container>
  );
};

export default MainPage;
