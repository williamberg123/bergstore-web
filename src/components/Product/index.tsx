import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { AddProductButton, Container, Figure, ProductDescription, ProductImage, ProductName, ProductPrice } from './styles';

export function Product() {
	return (
		<Container>
			<Figure>
				<Link to="/products/357436547568">
					<ProductImage />
				</Link>
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
