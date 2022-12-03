import { Outlet } from 'react-router-dom';
import { EmptyDiv } from '../../components/EmptyDiv';
import { NavBar } from '../../components/NavBar';
import { Container } from './styles';

export function Root() {
	return (
		<Container>
			<NavBar />
			<EmptyDiv />
			<Outlet />
		</Container>
	);
}
