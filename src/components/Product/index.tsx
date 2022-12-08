import { useState } from 'react';
import { FaCartPlus, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useMessage } from '../../hooks/useMessage';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { AddProductButton, Container, Figure, ProductDescription, ProductImage, ProductName, ProductPrice } from './styles';

export function Product({ name, description, price, _id, hasAlreadyAdded }: ProductType) {
	const [ hasAdded, setHasAdded ] = useState(hasAlreadyAdded);

	const { user, token } = useAuth();
	const { showMessage } = useMessage();

	const addProductToShoppingCart = async () => {
		try {
			await api.post(
				`/shoppingcarts/${user?.shopping_cart_id}/add_product`,
				{ product_id: _id, count: 1 },
				{
					headers: {
						'x-acess-token': token,
					},
				},
			);
			showMessage('SUCCESS', `Produto adicionado: ${name}`);
			setHasAdded(true);
		} catch (error: any) {
			if (error?.response?.data?.message === 'product is already in this shopping cart') {
				showMessage('ERROR', 'Este produto já está em seu carrinho de compras');
				return;
			}

			showMessage('ERROR', 'Não foi possível adicionar o produto');
		}
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
			<AddProductButton onClick={addProductToShoppingCart} disabled={hasAdded}>
				{
					hasAdded
					? <FaCheckCircle />
					: <FaCartPlus />
				}
			</AddProductButton>
		</Container>
	);
}
