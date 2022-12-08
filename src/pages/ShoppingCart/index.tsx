import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { useMessage } from '../../hooks/useMessage';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { Container, ItemsContainer, ShoppingCartPageTitle } from './styles';

export function ShoppingCart() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { user, token } = useAuth();
	const { showMessage } = useMessage();

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
	}, []);

	return (
		<Container>
			<ShoppingCartPageTitle>
				Seu carrinho de compras
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
		</Container>
	);
}
