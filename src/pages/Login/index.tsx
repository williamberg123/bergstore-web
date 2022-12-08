import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

import { useMessage } from '../../hooks/useMessage';
import { useAuth } from '../../hooks/useAuth';
import { UserType } from '../../@types/user';
import { Form } from '../../components/Form';
import { Logo } from '../../components/Logo';
import { api } from '../../services/api';

import { ChangeFormType, Container, FormTitle, Label, LoginHeader, SubmitButton, SubTitle, TextContainer, Title } from './styles';

export function Login() {
	const [isFormLogin, setIsFormLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const { handleSubmit, register } = useForm();
	const { changeUser, changeToken } = useAuth();
	const { showMessage } = useMessage();

	const handleLogin = async (data: FieldValues) => {
		try {
			setIsLoading(true);
			const response = await api.post('/users/authenticate', data);

			const { user, token }: { user: UserType, token: string } = response.data;

			if (!user) return alert('Usuário ou senha incorretos');

			changeUser(user);
			changeToken(token);
			navigate('/');
			showMessage('SUCCESS', 'Usuário logado com sucesso.');
		} catch (error) {
			showMessage('ERROR', 'Usuário ou senha incorretos.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleCreateAccount = async (data: FieldValues) => {
		try {
			setIsLoading(true);
			const response = await api.post('/users/new', data);

			const { user, token }: { user: UserType, token: string } = response.data;

			if (!user) return alert('Não foi possível criar sua conta');

			changeUser(user);
			changeToken(token);
			navigate('/');
			showMessage('SUCCESS', 'Usuário criado com sucesso.');
		} catch (error) {
			alert('Não foi possível criar sua conta');
		} finally {
			setIsLoading(false);
		}
	};

	const onSubmit = async (data: FieldValues) => {
		if (isFormLogin) {
			await handleLogin(data);
		} else {
			await handleCreateAccount(data);
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

				<SubmitButton disabled={isLoading} type="submit">
					{
						isLoading
							? <InfinitySpin color="white" />
							: (
								isFormLogin ? 'Entrar' : 'Criar conta'
							)
					}
				</SubmitButton>
			</Form>
		</Container>
	);
}
