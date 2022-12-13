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

export const ProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 800px) {
		width: 100%;
		align-items: center;
	}
`;

export const ProductName = styled.span`
	font-weight: bold;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 5px;
`;

export const ProductDescription = styled.span`
	font-weight: 300;
	font-size: 1.3rem;
	color: black;
	margin-bottom: 20px;
`;

export const ProductImage = styled.img`
	background-color: #AEAEAE;
	width: 350px;
	height: 280px;
	border-radius: 20px;

	@media (max-width: 800px) {
		margin-bottom: 20px;
	}
`;

export const ProductPrice = styled.span`
	font-weight: bold;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 30px;

	@media (max-width: 800px) {
		justify-content: center;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 0 20px;
	}
`;

export const AvaliateProductButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 270px;
	height: 40px;
	border-radius: 10px;
	font-size: 1.2rem;
	font-weight: 300;
	background-color: white;
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	@media (max-width: 600px) {
		width: 100%;
		margin-bottom: 10px;
	}
`;

export const AddProductButton = styled(AvaliateProductButton)`
	margin-left: 20px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;

	@media (max-width: 600px) {
		margin-left: 0;
	}
`;

export const DotsContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const Dot = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primary};
	margin-right: 10px;
`;

export const CountStar = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.primary};
	margin-left: 30px;
`;
