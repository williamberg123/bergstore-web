import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { BsCartCheck } from 'react-icons/bs';

import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { useMessage } from '../../hooks/useMessage';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { Container, ItemsContainer, NoProductsText, ShoppingCartPageTitle } from './styles';
import { changePage } from '../../store/page';

export function ShoppingCart() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { user, token } = useAuth();
	const { showMessage } = useMessage();
	const dispatch = useDispatch();

	const findShoppingCartProducts = async () => {
		try {
			setIsLoading(true);
			const { data } = await api.get(`/shoppingcarts/${user?.shopping_cart_id}/list`, {
				headers: {
					'x-acess-token': token,
				},
			});

			setProducts(data.products);
			showMessage('SUCCESS', 'Confira seu carrinho de compras');
		} catch (error) {
			showMessage('ERROR', 'Não foi possível buscar sua lista de carrinho de compras');
		} finally {
			setIsLoading(false);
		}
	};

	const removeOneProduct = (id: string) => {
		const updatedProducts = products.filter((item) => String(item._id) !== String(id));
		setProducts(updatedProducts);
	};

	useEffect(() => {
		findShoppingCartProducts();
		dispatch(changePage('shoppingcart'));
	}, []);

	return (
		<Container>
			<ShoppingCartPageTitle>
				<BsCartCheck />
				Carrinho de compras
			</ShoppingCartPageTitle>

			{
				isLoading
					? <InfinitySpin width="200" color="#FF005C" />
					: (
						<ItemsContainer>
							{
								products.map((item, index) => (
									<ShoppingCartItem
										removeOneProduct={removeOneProduct}
										key={`shoppingcartitem-${index + 1}`}
										{...item}
									/>
								))
							}
						</ItemsContainer>
					)
			}

			{
				(!isLoading && !products.length) && (
					<NoProductsText>Não há nada no carrinho</NoProductsText>
				)
			}
		</Container>
	);
}
