import styled from 'styled-components';

export const Container = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
	}
`;

export const Letter = styled.span`
	font-weight: bold;

`;
