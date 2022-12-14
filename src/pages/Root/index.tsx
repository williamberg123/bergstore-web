import { Outlet } from 'react-router-dom';
import { EmptyDiv } from '../../components/EmptyDiv';
import { Logo } from '../../components/Logo';
import { MobileNavBar } from '../../components/MobileNavBar';
import { NavBar } from '../../components/NavBar';
import { UserProfile } from '../../components/UserProfile';
import useMediaQuery from '../../hooks/useMediaQuery';

import { Container, OutletContainer, RootHeader } from './styles';

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

			<OutletContainer>
				<RootHeader>
					{
						isMobile && <UserProfile />
					}
					<Logo size="1.5rem" />
				</RootHeader>

				<Outlet />
			</OutletContainer>

		</Container>
	);
}
