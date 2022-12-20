import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function UserProfile() {
	return (
		<Container>
			<Link to="/profile">
				<BiUser />
			</Link>
		</Container>
	);
}
