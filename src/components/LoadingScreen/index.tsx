import { InfinitySpin } from 'react-loader-spinner';
import useMediaQuery from '../../hooks/useMediaQuery';

import { Logo } from '../Logo';
import { Container } from './styles';

export function LoadingScreen() {
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<Container>
			{
				isMobile
				? <Logo size="30px" />
				: <Logo size="50px" />
			}
			<InfinitySpin color="#FF005C" />
		</Container>
	);
}
