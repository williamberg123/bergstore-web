import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { AuthContextType } from '../@types/auth';
import { UserType } from '../@types/user';
import { api } from '../services/api';

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [isPageLoading, setIsPageLoading] = useState(true);
	const [token, setToken] = useState('');

	const changeUser = (v: UserType | null): void => {
		setUser(v);
	};

	const changeToken = (v: string): void => {
		setToken(v);
	};

	const getLoggedinUser = async () => {
		try {
			setIsPageLoading(true);

			const jsonToken = localStorage.getItem('token');

			if (!jsonToken) {
				return;
			}

			const loggedinUserToken = JSON.parse(jsonToken);

			const { data } = await api.get('/users', {
				headers: {
					'x-acess-token': loggedinUserToken,
				},
			});

			if (data.user._id && data.token) {
				changeUser(data.user);
				changeToken(data.token);
			}
		} catch (error) {
			// código para erro aqui
			localStorage.removeItem('token');
		} finally {
			setIsPageLoading(false);
		}
	};

	useEffect(() => {
		getLoggedinUser();
	}, []);

	const context = useMemo(() => ({
		user,
		token,
		isPageLoading,
		changeUser,
		changeToken,
	}), [user, token, isPageLoading, changeUser, changeToken]);

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	);
};
