import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Root } from './pages/Root';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ShoppingCart } from './pages/ShoppingCart';
import { ProductPage } from './pages/ProductPage';
import { useAuth } from './hooks/useAuth';
import { Profile } from './pages/Profile';

interface PrivateRouteProps {
	children: ReactNode;
	isAuth: boolean;
	backTo: string;
}

export const PrivateRoute = ({ children, isAuth, backTo }: PrivateRouteProps): any => {
	return isAuth ? children : <Navigate to={backTo} />;
};

export const AppRoutes = () => {
	const { user, token } = useAuth();

	return (
		<Routes>
			<Route
				path="/"
				element={
					(
						<PrivateRoute isAuth={!!user && !!token} backTo="/login">
							<Root />
						</PrivateRoute>
					)
				}
			>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<ProductPage />} />
				<Route path="/shoppingcart" element={<ShoppingCart />} />
				<Route path="/profile" element={<Profile />} />
			</Route>
			<Route
				path="/login"
				element={(
					<PrivateRoute isAuth={!user && !token} backTo="/">
						<Login />
					</PrivateRoute>
				)}
			/>
		</Routes>
	);
};
