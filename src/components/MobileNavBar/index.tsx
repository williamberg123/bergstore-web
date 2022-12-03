import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled, MdLocalGroceryStore } from 'react-icons/md';
import { BsFillBagPlusFill } from 'react-icons/bs';

import { Container, UlNavigation } from './styles';

export type PageType = 'home' | 'products' | 'shoppingcart'

export function MobileNavBar() {
	const [ page, setPage ] = useState<PageType>('home');

	const changePage = (p: PageType) => {
		setPage(p);
	};

	return (
		<Container>
			<UlNavigation>
				<li>
					<Link className={page === 'home' ? 'page' : ''} onClick={() => changePage('home')} to="/">
						<MdHomeFilled />
					</Link>
				</li>
				<li>
					<Link className={page === 'products' ? 'page' : ''} onClick={() => changePage('products')} to="/products">
						<BsFillBagPlusFill />
					</Link>
				</li>
				<li>
					<Link className={page === 'shoppingcart' ? 'page' : ''} onClick={() => changePage('shoppingcart')} to="/shoppingcart">
						<MdLocalGroceryStore />
					</Link>
				</li>
			</UlNavigation>
		</Container>
	);
}
