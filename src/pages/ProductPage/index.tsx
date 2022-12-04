import { Container, ProductDescription, ProductImage, ProductInfoContainer, ProductName, ProductPrice } from './styles';

export function ProductPage() {
	// const { id } = useParams();

	return (
		<Container>
			<ProductInfoContainer>
				<ProductName>Camisa polo masculina M</ProductName>
				<ProductDescription>Tamanho médio</ProductDescription>
				<ProductPrice>R$50,00</ProductPrice>
			</ProductInfoContainer>

			<ProductImage />
		</Container>
	);
}
