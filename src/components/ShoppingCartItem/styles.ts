import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: white;
	margin: 0 auto 20px;
	border-radius: 10px;
	box-shadow: 2px 2px 10px #AEAEAE;
`;

export const ProductFigure = styled.figure`
	height: 80px;
	aspect-ratio: 5/4;
	background-color: #AEAEAE;
	border-radius: 10px;
`;

export const ProductImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px;
`;

export const ProductName = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
`;

export const ProductAmount = styled.span`
	color: #AEAEAE;
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
