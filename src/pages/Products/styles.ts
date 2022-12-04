import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-top: 70px;
`;

export const ProductsContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-around;
	padding: 20px 20px 70px;
	flex-wrap: wrap;
	gap: 20px;

	@media (max-width: 600px) {
		gap: 10px;
	}
`;

export const ProductsPageTitle = styled.span`
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

export const SearchProductInput = styled.input`
	width: 300px;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #AEAEAE;
	padding: 0 10px;

	@media (max-width: 600px) {
		width: 100%;
		margin-top: 20px;
	}
`;
