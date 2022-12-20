import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 90px 0;

	& svg {
		margin: auto;
	}
`;

export const ShoppingCartPageTitle = styled.span`
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	font-weight: 300;
	font-size: 2rem;

	& svg {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}

	@media (max-width: 600px) {
		font-size: 1.5rem;
		padding-top: 0;
	}
`;

export const ItemsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-top: 30px;
`;

export const NoProductsText = styled.span`
	display: flex;
	align-items: center;
	margin: auto;
	color: #AEAEAE;
	font-size: 1.3rem;

	& svg {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
`;
