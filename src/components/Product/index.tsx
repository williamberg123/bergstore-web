import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductType } from '../../@types/product';
import { useMessage } from '../../hooks/useMessage';

import { AddProductButton, Container, Figure, ProductDescription, ProductImage, ProductName, ProductPrice } from './styles';

export function Product({ name, description, price, _id }: ProductType) {
	const { showMessage } = useMessage();

	const addProductToShoppingCart = async () => {
		showMessage('SUCCESS', `Produto adicionado: ${name}`);
	};

	const formatedPrice = Number(price / 100).toFixed(2).replace('.', ',');

	return (
		<Container>
			<Figure>
				<Link to="/products/357436547568">
					<ProductImage />
				</Link>
			</Figure>

			<ProductName>{name}</ProductName>
			<ProductDescription>{description}</ProductDescription>
			<ProductPrice>R${formatedPrice}</ProductPrice>
			<AddProductButton onClick={addProductToShoppingCart}>
				<FaPlus />
			</AddProductButton>
		</Container>
	);
}
