import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 120px;
	height: 100vh;
	position: fixed;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.8rem;
		font-weight: 500;
	}

	& a.page {
		color: ${({ theme }) => theme.colors.primary};
	}

	& svg {
		width: 25px;
		height: 25px;
		margin-bottom: 3px;
	}
`;

export const EmailFirstLetter = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	text-transform: uppercase;
`;

export const Letter = styled.span`
	font-weight: bold;
`;
