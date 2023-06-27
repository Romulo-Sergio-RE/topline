import { FirstSectionPropsType } from './types';
import * as S from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../../context/authProvider';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

type Inputs = {
  email: string,
  password: string,
  passwordAgain: string,
};
const FirstSection: React.FC<FirstSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const { cadastro } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    if (data.password === data.passwordAgain) {
      await cadastro(data.email, data.password)
    } else {
      alert("sua senhas nao estao iguais")
    }
  };

  return (
    <S.Container {...rest} ref={innerRef}>
      <S.ContainerContent onSubmit={handleSubmit(onSubmit)}>
        <S.ContentLabelInput>
          <S.Label>Email:</S.Label>
          <S.Input
            type="email"
            placeholder='Digite seu Email'
            {...register("email", { required: "Senha esta incorreta ou vazio" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span>{errors.email?.message}</span>}
        </S.ContentLabelInput>
        <S.ContentLabelInput>
          <S.Label>Senha:</S.Label>
          <S.Input
            type="password"
            placeholder='Digite sua Senha'
            {...register("password", { required: "Senha esta incorreta ou vazio" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <span>{errors.password?.message}</span>}
        </S.ContentLabelInput>
        <S.ContentLabelInput>
          <S.Label>Senha Novamente:</S.Label>
          <S.Input
            type="password"
            placeholder='Digite sua Senha Novamente'
            {...register("passwordAgain", { required: "Senha esta incorreta ou vazio" })}
            aria-invalid={errors.passwordAgain ? "true" : "false"}
          />
          {errors.passwordAgain && <span>{errors.passwordAgain?.message}</span>}
        </S.ContentLabelInput>

        <Link to={"/cadastrar"} >
          <Button
            widthBtn='290px'
            heightBtn='50px'
            backColor={"#FF6700"}
            fontColor={"#ffff"}
            title='Cadastar'
          />
        </Link>
      </S.ContainerContent>
    </S.Container>
  );
};

export default FirstSection;
