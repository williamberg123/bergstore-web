import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../@types/product';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Container, ProductDescription, ProductImage, ProductInfoContainer, ProductName, ProductPrice } from './styles';

export function ProductPage() {
	const [product, setProduct] = useState({} as ProductType);
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();
	const { token } = useAuth();

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
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		findProductInfo();
	}, [id]);

	const formatedPrice = Number(product?.price / 100).toFixed(2).replace('.', ',');

	return (
		<Container>
			{
				isLoading
					? <InfinitySpin color="black" />
					: (
						<>
							<ProductInfoContainer>
								<ProductName>{product?.name}</ProductName>
								<ProductDescription>{product?.description}</ProductDescription>
								<ProductPrice>R${formatedPrice}</ProductPrice>
							</ProductInfoContainer>

							<ProductImage />
						</>
					)
			}
		</Container>
	);
}
