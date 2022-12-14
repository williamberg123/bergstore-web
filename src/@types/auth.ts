import { UserType } from './user';

export interface AuthContextType {
	user: UserType | null;
	token: string;
	isPageLoading: boolean;
	// eslint-disable-next-line
	changeUser: (v: UserType | null) => void;
	// eslint-disable-next-line
	changeToken: (v: string) => void;
}
