import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	border-top: 1px solid #AEAEAE;
	padding: 20px 0;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const UlNavigation = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	list-style: none;

	& a {
		text-decoration: none;
		color: #AEAEAE;
	}

	& a.page {
		color: ${({ theme }) => theme.colors.primary};
	}

	& svg {
		width: 25px;
		height: 25px;
	}
`;
