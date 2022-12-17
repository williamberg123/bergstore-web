import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import { useMessage } from '../../hooks/useMessage';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Container, ProductNotFound } from './styles';
import { ProductPageInfo } from '../../components/ProductPageInfo';

export function ProductPage() {
	const [product, setProduct] = useState({} as ProductType);
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();
	const { token } = useAuth();
	const { showMessage } = useMessage();

	const findProductInfo = async () => {
		try {
			setIsLoading(true);

			const { data } = await api.get(`/products/${id}/find`, {
				headers: {
					'x-acess-token': token,
				},
			});

			setProduct(data);
		} catch (error) {
			showMessage('ERROR', 'Não foi possível buscar o produto');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		findProductInfo();
	}, [id]);

	return (
		<Container>
			{
				isLoading
					? <InfinitySpin color="#FF005C" />
					: (
						!product._id
							? (
								<ProductNotFound>
									Produto não encontrado
									<Link to="/products">
										<FiArrowLeftCircle />
										Ir para página de produtos
									</Link>
								</ProductNotFound>
							)
							: <ProductPageInfo {...product} />
					)
			}
		</Container>
	);
}
