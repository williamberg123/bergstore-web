import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: white;
	margin: 0 auto 20px;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 2px 2px 10px #AEAEAE;
`;

export const ProductFigure = styled.figure`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;

	& > a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
	}
`;

export const ProductImage = styled.img`
	display: flex;
	height: 80px;
	width: 100px;
	border-radius: 10px;
	background-color: #AEAEAE;

	@media (max-width: 600px) {
		width: 80px;
		height: 64px;
	}
`;

export const ProductName = styled.figcaption`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
	margin-top: 10px;

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export const ProductAmount = styled.span`
	color: #AEAEAE;
	font-weight: bold;
`;

export const IncreaseButton = styled.button`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	border: none;
	cursor: pointer;

	&:disabled {
		background-color: #AEAEAE;
		cursor: not-allowed;
	}

	@media (max-width: 600px) {
		width: 20px;
		height: 20px;
	}
`;

export const DecreaseButton = styled(IncreaseButton)``;

export const RemoveButton = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	background-color: white;
	font-weight: bold;
	padding: 5px 10px;
	border-radius: 5px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
	}
`;
