import { createContext, ReactNode, useMemo, useState } from 'react';
import { AuthContextType } from '../@types/auth';

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [ user, setUser ] = useState(null);
	const [ token, setToken ] = useState('');

	const context = useMemo(() => ({
		user,
		token,
	}), [user, token]);

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	);
};
