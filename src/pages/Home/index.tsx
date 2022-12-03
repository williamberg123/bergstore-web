import { GiClothes } from 'react-icons/gi';
import { BsBoxSeam, BsTools } from 'react-icons/bs';

import { Container, IconsContainer, PinkText, TitleSpan } from './styles';

export function Home() {
	return (
		<Container>
			<TitleSpan>
				Na <PinkText>BergStore</PinkText> você ganha desconto <br />
				em compras à vista
			</TitleSpan>

			<IconsContainer>
				<GiClothes />
				<BsBoxSeam />
				<BsTools />
			</IconsContainer>
		</Container>
	);
}
