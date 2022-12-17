import { ProductType } from '../../@types/product';
import {
	ProductInfoContainer,
	ProductName,
	ProductDescription,
	DotsContainer,
	Dot,
	CountStar,
	ProductPrice,
	ProductImage,
	ButtonsContainer,
	AvaliateProductButton,
	AddProductButton,
} from './styles';

export function ProductPageInfo({ name, description, price }: ProductType) {
	const formatedPrice = Number(price / 100).toFixed(2).replace('.', ',');

	return (
		<>
			<ProductInfoContainer>
				<ProductName>{name}</ProductName>
				<ProductDescription>{description}</ProductDescription>

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
	);
}
