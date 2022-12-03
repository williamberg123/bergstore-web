import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const ProductsContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-around;
	padding: 20px;
	flex-wrap: wrap;
	gap: 20px;
`;

export const ProductsPageTitle = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 30px;
	font-weight: 300;
	font-size: 2rem;
`;

export const SearchProductInput = styled.input`
	width: 300px;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #AEAEAE;
	padding: 0 10px;
`;
