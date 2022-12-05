import { useAuth } from '../../hooks/useAuth';
import { Container, Letter } from './styles';

export function UserProfile() {
	const { user } = useAuth();

	const firstLetter = user?.email[0];

	return (
		<Container>
			<Letter>{firstLetter}</Letter>
		</Container>
	);
}
