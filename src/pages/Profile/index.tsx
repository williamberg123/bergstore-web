import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { ButtonsContainer, CancelDeleteUserButton, ConfirmDeleteUserBackground, ConfirmDeleteUserBox, ConfirmDeleteUserButton, Container, DeleteUserButton, Input, Label, LogoutButton, ResetPasswordButton, Title } from './styles';

export function Profile() {
	const { user, token, changeToken, changeUser } = useAuth();
	const [isTryingToDeleteUser, setIsTryingToDeleteUser] = useState(false);

	const logout = (): void => {
		changeToken('');
		changeUser(null);
		localStorage.removeItem('token');
	};

	const deleteUser = async () => {
		try {
			await api.delete(`/users/${user?._id}`, {
				headers: {
					'x-acess-token': token,
				},
			});

			logout();
		} catch (error) {
			// código para erro
		}
	};

	return (
		<Container>
			<Title>Seus dados</Title>
			<Label>
				Seu email
				<Input value={user?.email} disabled />
			</Label>

			<ResetPasswordButton>Redefinir senha</ResetPasswordButton>

			<Title>Conta</Title>

			<ButtonsContainer>
				<LogoutButton onClick={logout}>Sair</LogoutButton>
				<DeleteUserButton onClick={() => setIsTryingToDeleteUser(true)}>Deletar conta</DeleteUserButton>
			</ButtonsContainer>

			{
				isTryingToDeleteUser && (
					<ConfirmDeleteUserBackground>
						<ConfirmDeleteUserBox>
							Quer realmente excluir sua conta?
							<div>
								<ConfirmDeleteUserButton onClick={deleteUser}>Sim</ConfirmDeleteUserButton>
								<CancelDeleteUserButton onClick={() => setIsTryingToDeleteUser(false)}>Cancelar</CancelDeleteUserButton>
							</div>
						</ConfirmDeleteUserBox>
					</ConfirmDeleteUserBackground>
				)
			}
		</Container>
	);
}
