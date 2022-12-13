import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

import { useMessage } from '../../hooks/useMessage';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { AddProductButton, AvaliateProductButton, ButtonsContainer, Container, CountStar, Dot, DotsContainer, ProductDescription, ProductImage, ProductInfoContainer, ProductName, ProductPrice } from './styles';

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

	const formatedPrice = Number(product.price / 100).toFixed(2).replace('.', ',');

	return (
		<Container>
			{
				isLoading
					? <InfinitySpin color="#FF005C" />
					: (
						<>
							<ProductInfoContainer>
								<ProductName>{product?.name}</ProductName>
								<ProductDescription>{product?.description}</ProductDescription>

								<DotsContainer>
									<Dot />
									<Dot />
									<Dot />
									<Dot />
									<Dot />

									<CountStar>4x</CountStar>
								</DotsContainer>

								<ProductPrice>R${formatedPrice}</ProductPrice>

								<ButtonsContainer>
									<AvaliateProductButton>Avaliar produto</AvaliateProductButton>
									<AddProductButton>Adicionar ao carrinho</AddProductButton>
								</ButtonsContainer>
							</ProductInfoContainer>

							<ProductImage />
						</>
					)
			}
		</Container>
	);
}
