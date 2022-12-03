import { Outlet } from 'react-router-dom';
import { EmptyDiv } from '../../components/EmptyDiv';
import { MobileNavBar } from '../../components/MobileNavBar';
import { NavBar } from '../../components/NavBar';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Container } from './styles';

export function Root() {
	const isMobile = useMediaQuery('(max-width: 800px)');

	return (
		<Container>
			{
				isMobile
					? <MobileNavBar />
					: (
						<>
							<NavBar />
							<EmptyDiv />
						</>
					)
			}

			<Outlet />
		</Container>
	);
}
