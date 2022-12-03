import { ThemeProvider } from 'styled-components';
import { Login } from './pages/Login';
import { AppRoutes } from './routes';
import { theme } from './styles/theme';

export default function App() {
	const user = false;

	return (
		<ThemeProvider theme={theme}>
			{
				user
				? <AppRoutes />
				: <Login />
			}
		</ThemeProvider>
	);
}
