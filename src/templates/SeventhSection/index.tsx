import { SeventhSectionPropsType } from './types';
import * as S from './styles';
import Button from '../../components/Button';

const SeventhSection: React.FC<SeventhSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      <S.Text>
        Agora que você viu tudo o que a Topline consegue fazer,
        está na hora de se cadastrar e ter uma experiência incrível
        na hora de criar seus roteiros de viagem.
      </S.Text>
      <Button
        widthBtn='240px'
        heightBtn='60px'
        backColor={"#FF6700"}
        fontColor={"#ffff"}
        title='Cadastrar'
      />
    </S.Container>
  );
};

export default SeventhSection;
