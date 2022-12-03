import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppRoutes />
			<GlobalStyles />
		</ThemeProvider>
	);
}
