import { FaPlus } from 'react-icons/fa';

import { AddProductButton, Container, Figure, ProductDescription, ProductImage, ProductName, ProductPrice } from './styles';

export function Product() {
	return (
		<Container>
			<Figure>
				<ProductImage />
			</Figure>

			<ProductName>Camisa polo branca M</ProductName>
			<ProductDescription>Tamanho médio</ProductDescription>
			<ProductPrice>R$50,00</ProductPrice>
			<AddProductButton>
				<FaPlus />
			</AddProductButton>
		</Container>
	);
}
