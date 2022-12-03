import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;

export const OutletContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const RootHeader = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid #AEAEAE;

	@media (max-width: 800px) {
		flex-direction: row-reverse;
	}
`;

export const RootHeaderSpan = styled.span`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

export const BoldText = styled.span`
	font-weight: bold;
`;
