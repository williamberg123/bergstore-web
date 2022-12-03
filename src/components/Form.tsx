import { ReactNode } from 'react';

export interface FormProps {
	children: ReactNode;
	onSubmit: () => void;
}

export function Form({ children, onSubmit }: FormProps) {
	return (
		<form onSubmit={onSubmit}>
			{children}
		</form>
	);
}
