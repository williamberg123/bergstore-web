import styled from 'styled-components';

export const Container = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	& a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	& svg {
		width: 20px;
		height: 20px;
		color: ${({ theme }) => theme.colors.primary};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
	}

	&:hover svg {
		color: white;
	}

	@media (max-width: 600px) {
		width: 40px;
		height: 40px;

		& svg {
			width: 18px;
			height: 18px;
		}
	}
`;
