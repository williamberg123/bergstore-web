import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.secondary};
		font-family: 'Roboto', sans-serif;
	}
`;
