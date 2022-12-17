import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap-reverse;

	@media (max-width: 800px) {
		margin-top: 90px;
		flex-direction: column-reverse;
		text-align: center;
	}
`;

export const ProductNotFound = styled.span`
	font-size: 2rem;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.colors.primary};

	& a {
		display: flex;
		align-items: center;
		width: fit-content;
		padding: 10px 20px;
		margin-top: 20px;
		text-decoration: none;
		border: 2px solid ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
	}

	& a:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
	}

	& a svg {
		margin-right: 10px;
	}
`;
