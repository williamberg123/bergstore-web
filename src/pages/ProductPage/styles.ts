import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const ProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProductName = styled.span`
	font-weight: bold;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.primary};
`;

export const ProductDescription = styled.span`
	font-weight: 300;
	font-size: 1.3rem;
	color: #AEAEAE;
`;

export const ProductImage = styled.img`
	background-color: #AEAEAE;
	width: 400px;
	height: 320px;
	border-radius: 20px;
`;

export const ProductPrice = styled.span``;
