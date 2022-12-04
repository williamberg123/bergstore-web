import { Product } from '../../components/Product';
import { Container, ProductsContainer, ProductsPageTitle, SearchProductInput } from './styles';

export function Products() {
	return (
		<Container>
			<ProductsPageTitle>
				Nossos produtos
				<SearchProductInput type="text" placeholder="procure um produto" />
			</ProductsPageTitle>

			<ProductsContainer>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</ProductsContainer>
		</Container>
	);
}
