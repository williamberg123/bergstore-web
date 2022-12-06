import { ThemeProvider } from 'styled-components';
import { Message } from './components/Message';
import { MessageProvider } from './contexts/MessageProvider';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<MessageProvider>
				<Message />
				<AppRoutes />
				<GlobalStyles />
			</MessageProvider>
		</ThemeProvider>
	);
}
