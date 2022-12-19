import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GiClothes } from 'react-icons/gi';
import { BsBoxSeam, BsTools } from 'react-icons/bs';

import { Container, IconsContainer, PinkText, TitleSpan } from './styles';
import { changePage } from '../../store/page';

export function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changePage('home'));
	}, []);

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
