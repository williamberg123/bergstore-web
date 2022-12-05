import { createContext, ReactNode, useMemo, useState } from 'react';
import { AuthContextType } from '../@types/auth';
import { UserType } from '../@types/user';

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [ user, setUser ] = useState<UserType | null>(null);
	const [ token, setToken ] = useState('');

	const changeUser = (v: UserType | null): void => {
		setUser(v);
	};

	const changeToken = (v: string): void => {
		setToken(v);
	};

	const context = useMemo(() => ({
		user,
		token,
		changeUser,
		changeToken,
	}), [user, token, changeUser, changeToken]);

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	);
};
