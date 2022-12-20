import { useAuth } from '../../hooks/useAuth';
import { Container, Input, Label, LogoutButton, ResetPasswordButton, Title } from './styles';

export function Profile() {
	const { user, changeToken, changeUser } = useAuth();

	const logout = (): void => {
		changeToken('');
		changeUser(null);
		localStorage.removeItem('token');
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
			<LogoutButton onClick={logout}>Sair</LogoutButton>
		</Container>
	);
}
