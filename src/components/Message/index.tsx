import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';

import { useMessage } from '../../hooks/useMessage';
import { Container } from './styles';

export interface MessageProps {
	type: 'SUCCESS' | 'ERROR';
}

export function Message() {
	const { show, message, messageType, isFirstRender } = useMessage();

	return (
		<Container type={messageType} show={show} isFirstRender={isFirstRender}>
			{
				messageType === 'ERROR'
				? <BiErrorCircle />
				: <BiCheckCircle />
			}
			{message}
		</Container>
	);
}
