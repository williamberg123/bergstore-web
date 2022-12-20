import styled from 'styled-components';

export const Container = styled.div`
	font-family: 'Montserrat', sans-serif;
	width: 250px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 0 10px 10px;
	background-color: white;
	box-shadow: 2px 2px 8px #AEAEAE;

	@media (max-width: 600px) {
		width: 180px;
	}
`;

export const Figure = styled.figure`
	width: calc(100% + 20px);
	aspect-ratio: 5/4;
	background-color: #AEAEAE;
	border-radius: 10px;
	margin: 0 -10px;

	& > a {
		display: flex;
		width: 100%;
		height: 100%;
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

export const ProductName = styled.span`
	font-weight: bold;
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.primary};
	margin: 5px 0;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

export const ProductDescription = styled.span`
	font-size: 0.75rem;
	font-weight: 500;
	color: #AEAEAE;
	margin-bottom: 5px;
`;

export const ProductPrice = styled.span`
	font-weight: bold;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.primary};
	margin-top: 10px;
`;

export const AddProductButton = styled.button`
	width: 100%;
	height: 40px;
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: white;
	border-radius: 10px;
	cursor: pointer;
	margin-top: 10px;

	& svg {
		width: 20px;
		height: 20px;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};

		& svg {
			color: white;
		}
	}

	&:disabled {
		background-color: #ffbad6;
		border-color: #ffbad6;

		& svg {
			color: white;
		}
	}

	@media (max-width: 600px) {
		height: 30px;
	}
`;
