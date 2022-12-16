import { InfinitySpin } from 'react-loader-spinner';

import { Logo } from '../Logo';
import { Container } from './styles';

export function LoadingScreen() {
	return (
		<Container>
			<Logo size="50px" />
			<InfinitySpin color="#FF005C" />
		</Container>
	);
}
