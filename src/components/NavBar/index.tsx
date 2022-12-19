import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdHomeFilled, MdLocalGroceryStore } from 'react-icons/md';
import { BsFillBagPlusFill } from 'react-icons/bs';

import { UserProfile } from '../UserProfile';
import { Container, UlNavigation } from './styles';
import { changePage } from '../../store/page';

export type PageType = 'home' | 'products' | 'shoppingcart'

export function NavBar() {
	const { page } = useSelector((state) => state) as { page: PageType };
	const dispatch = useDispatch();

	return (
		<Container>
			<UserProfile />

			<UlNavigation>
				<li>
					<Link className={page === 'home' ? 'page' : ''} onClick={() => dispatch(changePage('home'))} to="/">
						<MdHomeFilled />
					</Link>
				</li>
				<li>
					<Link className={page === 'products' ? 'page' : ''} onClick={() => dispatch(changePage('products'))} to="/products">
						<BsFillBagPlusFill />
					</Link>
				</li>
				<li>
					<Link className={page === 'shoppingcart' ? 'page' : ''} onClick={() => dispatch(changePage('shoppingcart'))} to="/shoppingcart">
						<MdLocalGroceryStore />
					</Link>
				</li>
			</UlNavigation>

			<div style={{ width: '70px', height: '70px' }} />
		</Container>
	);
}
