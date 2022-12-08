export interface ProductType {
	_id?: string;
	name: string;
	description?: string;
	price: number;
	hasAlreadyAdded: boolean;
	count?: number;
	// eslint-disable-next-line
	removeOneProduct?: (id: string) => void;
}
