import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../@types/user';

import { Form } from '../../components/Form';
import { Logo } from '../../components/Logo';
import { useAuth } from '../../hooks/useAuth';
import { useMessage } from '../../hooks/useMessage';
import { api } from '../../services/api';

import { ChangeFormType, Container, FormTitle, Label, LoginHeader, SubTitle, TextContainer, Title } from './styles';

export function Login() {
	const [isFormLogin, setIsFormLogin] = useState(true);
	const navigate = useNavigate();

	const { handleSubmit, register } = useForm();
	const { changeUser, changeToken } = useAuth();
	const { showMessage } = useMessage();

	const handleLogin = async (data: FieldValues) => {
		try {
			const response = await api.post('/users/authenticate', data);

			const { user, token }: { user: UserType, token: string } = response.data;

			if (!user) return alert('Usuário ou senha incorretos');

			changeUser(user);
			changeToken(token);
			navigate('/');
			showMessage('SUCCESS', 'Usuário logado com sucesso.');
		} catch (error) {
			console.log(error);
			showMessage('ERROR', 'Usuário ou senha incorretos.');
		}
	};

	const handleCreateAccount = async (data: FieldValues) => {
		try {
			const response = await api.post('/users/new', data);

			const { user, token }: { user: UserType, token: string } = response.data;

			if (!user) return alert('Não foi possível criar sua conta');

			changeUser(user);
			changeToken(token);
			navigate('/');
			showMessage('SUCCESS', 'Usuário criado com sucesso.');
		} catch (error) {
			console.log(error);
			alert('Não foi possível criar sua conta');
		}
	};

	const onSubmit = (data: FieldValues) => {
		if (isFormLogin) {
			handleLogin(data);
		} else {
			handleCreateAccount(data);
		}
	};

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

			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>{isFormLogin ? 'Login' : 'Criar conta'}</FormTitle>

				<Label>
					Email
					<input {...register('email', { required: true })} type="email" placeholder="digite seu email" />
				</Label>

				<Label>
					Password
					<input {...register('password', { required: true })} type="password" placeholder="digite sua senha" />
				</Label>

				<ChangeFormType onClick={() => setIsFormLogin((s) => !s)}>
					{isFormLogin ? 'não possui conta? crie uma aqui' : 'já possui uma conta? faça login aqui'}
				</ChangeFormType>

				<input type="submit" value={isFormLogin ? 'Entrar' : 'Criar conta'} />
			</Form>
		</Container>
	);
}
