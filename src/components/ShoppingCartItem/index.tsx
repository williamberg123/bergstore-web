import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { useMessage } from '../../hooks/useMessage';
import { api } from '../../services/api';

import {
	Container,
	DecreaseButton,
	IncreaseButton,
	ProductAmount,
	ProductFigure,
	ProductImage,
	ProductName,
	RemoveButton,
} from './styles';

import blusa from '../../assets/blusa.jpg';

export function ShoppingCartItem({ name, _id, count, removeOneProduct }: ProductType) {
	const [productAmount, setProductAmount] = useState(count as number);
	const { user, token } = useAuth();
	const { showMessage } = useMessage();

	const removeShoppingCartProduct = async () => {
		try {
			await api.delete(`/shoppingcarts/${user?.shopping_cart_id}/product/${_id}`, {
				headers: {
					'x-acess-token': token,
				},
			});

			showMessage('SUCCESS', 'Produto removido');
			if (removeOneProduct) removeOneProduct(String(_id));
		} catch (error) {
			showMessage('ERROR', 'Não foi possível remover o produto');
		}
	};

	const increaseProductAmount = async () => {
		try {
			await api.post(`/shoppingcarts/${user?.shopping_cart_id}/change_product_amount`, {
				product_id: _id, amount: 1,
			}, {
				headers: {
					'x-acess-token': token,
				},
			});

			setProductAmount((s) => s + 1);
		} catch (error) {
			showMessage('ERROR', 'Não foi possível realizar a ação desejada');
		}
	};

	const decreaseProductAmount = async () => {
		try {
			if (productAmount <= 1) {
				// showMessage('ERROR', 'Não é possível realizar a ação desejada');
				return;
			}

			await api.post(`/shoppingcarts/${user?.shopping_cart_id}/change_product_amount`, {
				product_id: _id, amount: -1,
			}, {
				headers: {
					'x-acess-token': token,
				},
			});

			setProductAmount((s) => s - 1);
		} catch (error) {
			showMessage('ERROR', 'Não foi possível realizar a ação desejada');
		}
	};

	return (
		<Container>
			<ProductFigure>
				<Link to={`/products/${_id}`}>
					<ProductImage src={blusa} />
					<ProductName>{name}</ProductName>
				</Link>
			</ProductFigure>

			<ProductAmount>{productAmount}</ProductAmount>

			<IncreaseButton onClick={increaseProductAmount}>
				<HiPlusSm />
			</IncreaseButton>

			<DecreaseButton onClick={decreaseProductAmount} disabled={productAmount <= 1}>
				<HiMinusSm />
			</DecreaseButton>

			<RemoveButton onClick={removeShoppingCartProduct}>Remover</RemoveButton>
		</Container>
	);
}
