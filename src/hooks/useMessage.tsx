import { useContext } from 'react';
import { MessageContext } from '../contexts/MessageProvider';

export const useMessage = () => {
	const context = useContext(MessageContext);

	return context;
};
