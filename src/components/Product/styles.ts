import styled from 'styled-components';

export const Container = styled.div`
	width: 250px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 0 10px 10px;
	background-color: white;
`;

export const Figure = styled.figure`
	width: calc(100% + 20px);
	aspect-ratio: 5/4;
	background-color: #AEAEAE;
	border-radius: 10px;
	margin: 0 -10px;
`;

export const ProductImage = styled.img``;

export const ProductName = styled.span`
	font-weight: bold;
	font-size: 1.25rem;
	color: ${({ theme }) => theme.colors.primary};
	margin: 5px 0;
`;

export const ProductDescription = styled.span`
	font-size: 0.75rem;
	font-weight: 500;
	color: #AEAEAE;
	margin-bottom: 5px;
`;

export const ProductPrice = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
	margin-top: 10px;
`;

export const AddProductButton = styled.button`
	width: 100%;
	height: 40px;
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	cursor: pointer;
	margin-top: 10px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};

		& svg {
			color: white;
		}
	}
`;
