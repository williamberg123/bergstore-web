import { ThemeProvider } from 'styled-components';
import { LoadingScreen } from './components/LoadingScreen';
import { Message } from './components/Message';
import { MessageProvider } from './contexts/MessageProvider';
import { useAuth } from './hooks/useAuth';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	const { isPageLoading } = useAuth();

	return (
		<ThemeProvider theme={theme}>
			<MessageProvider>
				<Message />

				{
					isPageLoading
					? <LoadingScreen />
					: <AppRoutes />
				}

				<GlobalStyles />
			</MessageProvider>
		</ThemeProvider>
	);
}
