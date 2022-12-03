import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 120px;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	border-right: 1px solid #AEAEAE;
	padding: 20px 0;
`;

export const UlNavigation = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;

	& li {
		margin: 20px 0;
	}

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
