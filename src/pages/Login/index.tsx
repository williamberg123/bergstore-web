import { useState } from 'react';
import { Form } from '../../components/Form';
import { Logo } from '../../components/Logo';
import { ChangeFormType, Container, FormTitle, Label, LoginHeader, SubTitle, TextContainer, Title } from './styles';

export function Login() {
	const [isFormLogin, setIsFormLogin] = useState(true);

	const onSubmit = () => {};

	return (
		<Container>
			<LoginHeader>
				<Logo size="1.8rem" />
			</LoginHeader>

			<TextContainer>
				<Title>
					A melhor loja do Ceará, <br />
					tudo em um só lugar!
				</Title>

				<SubTitle>
					Reconhecida com selo de qualidade
				</SubTitle>
			</TextContainer>

			<Form onSubmit={onSubmit}>
				<FormTitle>{isFormLogin ? 'Login' : 'Criar conta'}</FormTitle>

				<Label>
					Email
					<input type="email" placeholder="digite seu email" />
				</Label>

				<Label>
					Password
					<input type="password" placeholder="digite sua senha" />
				</Label>

				<ChangeFormType onClick={() => setIsFormLogin((s) => !s)}>
					{isFormLogin ? 'não possui conta? crie uma aqui' : 'já possui uma conta? faça login aqui'}
				</ChangeFormType>

				<input type="submit" value={isFormLogin ? 'Entrar' : 'Criar conta'} />
			</Form>
		</Container>
	);
}
