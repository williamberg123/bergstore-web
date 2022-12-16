import styled from 'styled-components';
import { ThemeProps } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
`;
