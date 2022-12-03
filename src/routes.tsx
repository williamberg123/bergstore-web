import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Root } from './pages/Root';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ShoppingCart } from './pages/ShoppingCart';

interface PrivateRouteProps {
	children: ReactNode;
	isAuth: boolean;
	backTo: string;
}

export const PrivateRoute = ({ children, isAuth, backTo }: PrivateRouteProps) => {
	return isAuth ? children : <Navigate to={backTo} />;
};

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					(
						<PrivateRoute isAuth={false} backTo="/login">
							<Root />
						</PrivateRoute>
					)
				}
			>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/shoppingcart" element={<ShoppingCart />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};
