import styled from 'styled-components';

export const Container = styled.span<{ size: string }>`
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	font-size: ${({ size }) => size};
`;

export const PinkText = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;
