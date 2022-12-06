import { Container, DecreaseButton, IncreaseButton, ProductAmount, ProductFigure, ProductImage, ProductName, RemoveButton } from './styles';

export function ShoppingCartItem() {
	return (
		<Container>
			<ProductFigure>
				<ProductImage />
			</ProductFigure>

			<ProductName>Camisa polo branca M</ProductName>
			<ProductAmount>1</ProductAmount>
			<IncreaseButton>+</IncreaseButton>
			<DecreaseButton>-</DecreaseButton>
			<RemoveButton>Remove</RemoveButton>
		</Container>
	);
}
