import { createContext, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

type MessageTypeOptions = 'SUCCESS' | 'ERROR';

export interface MessageContextType {
	messageType: MessageTypeOptions;
	message: string;
	show: boolean;
	isFirstRender: boolean;
	// eslint-disable-next-line
	showMessage: (type: MessageTypeOptions, text: string) => void;
}

export const MessageContext = createContext({} as MessageContextType);

export function MessageProvider({ children }: { children: ReactNode }) {
	const [show, setShow] = useState(false);
	const [messageType, setMessageType] = useState<MessageTypeOptions>('SUCCESS');
	const [message, setMessage] = useState('Logado com sucesso');

	const isFirstRender = useRef(true);

	const exitMessage = () => {
		setShow(false);
	};

	const showMessage = (type: MessageTypeOptions, text: string) => {
		setShow(true);
		setMessageType(type);
		setMessage(text);
	};

	useEffect(() => {
		if (show) {
			setTimeout(() => {
				exitMessage();
			}, 3000);
		}
	}, [show, isFirstRender.current]);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
		}
	}, [isFirstRender.current]);

	const context = useMemo(() => ({
		messageType, message, show, showMessage, isFirstRender: isFirstRender.current,
	}), [messageType, message, show, showMessage, isFirstRender]);

	return (
		<MessageContext.Provider value={context}>
			{children}
		</MessageContext.Provider>
	);
}
