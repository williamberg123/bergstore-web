import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { Product } from '../../components/Product';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { useMessage } from '../../hooks/useMessage';
import { api } from '../../services/api';

import { Container, ProductsContainer, ProductsPageTitle, SearchProductInput } from './styles';

export function Products() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { token } = useAuth();
	const { showMessage } = useMessage();

	const findProducts = async () => {
		try {
			setIsLoading(true);
			const { data } = await api.get('/products/list_all', {
				headers: {
					'x-acess-token': token,
				},
			});

			setProducts(data.products);
			showMessage('SUCCESS', 'Confira nossos produtos.');
		} catch (error) {
			console.log(error);
			showMessage('ERROR', 'Não foi possível buscar os produtos.');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		findProducts();
	}, []);

	return (
		<Container>
			<ProductsPageTitle>
				Nossos produtos
				<SearchProductInput type="text" placeholder="procure um produto" />
			</ProductsPageTitle>

			{
				isLoading
					? <InfinitySpin width="200" color="#FF005C" />
					: (
						<ProductsContainer>
							{
								products.map((p: ProductType, index: number) => <Product key={`product0${index + 1}`} {...p} />)
							}
						</ProductsContainer>
					)
			}

		</Container>
	);
}
