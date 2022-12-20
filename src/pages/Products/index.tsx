import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { BsBag } from 'react-icons/bs';

import { Product } from '../../components/Product';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { useMessage } from '../../hooks/useMessage';
import { api } from '../../services/api';

import { Container, ProductsContainer, ProductsPageTitle, SearchProductInput } from './styles';
import { changePage } from '../../store/page';

export function Products() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [search, setSearch] = useState('');

	const { user, token } = useAuth();
	const { showMessage } = useMessage();
	const dispatch = useDispatch();

	const findProducts = async () => {
		try {
			setIsLoading(true);
			const { data } = await api.get(`/products/list_all/shoppingcart/${user?.shopping_cart_id}`, {
				headers: {
					'x-acess-token': token,
				},
			});

			setProducts(data.products);
			showMessage('SUCCESS', 'Confira nossos produtos');
		} catch (error) {
			showMessage('ERROR', 'Não foi possível buscar os produtos');
		} finally {
			setIsLoading(false);
		}
	};

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();

		setSearch(value);
	};

	useEffect(() => {
		findProducts();
		dispatch(changePage('products'));
	}, []);

	const filteredProducts = search ? products.filter(({ name }) => name.toLowerCase().includes(search)) : products;

	return (
		<Container>
			<ProductsPageTitle>
				<span>
					<BsBag />
					Nossos produtos
				</span>
				<SearchProductInput onChange={handleChangeSearch} type="text" placeholder="procure um produto" />
			</ProductsPageTitle>

			{
				isLoading
					? <InfinitySpin width="200" color="#FF005C" />
					: (
						<ProductsContainer>
							{
								filteredProducts.map((p: ProductType, index: number) => (
									<Product key={`product0${index + 1}`} {...p} />
								))
							}
						</ProductsContainer>
					)
			}
		</Container>
	);
}
