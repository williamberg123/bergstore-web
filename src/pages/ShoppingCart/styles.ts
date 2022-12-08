import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin: 70px 0;

	& svg {
		margin: auto;
	}
`;

export const ShoppingCartPageTitle = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 30px;
	font-weight: 300;
	font-size: 2rem;

	@media (max-width: 800px) {
		font-size: 1.2rem;
	}

	@media (max-width: 600px) {
		flex-direction: column;
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
