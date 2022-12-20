import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 90px;
	padding: 20px;
`;

export const Title = styled.span`
	font-size: 2rem;
	font-weight: 300;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	font-weight: 300;
	margin-top: 20px;
`;

export const Input = styled.input`
	width: 400px;
	height: 50px;
	padding: 0 10px;
	border-radius: 10px;
	border: 1px solid #939393;
	margin-top: 5px;
	font-size: 1.2rem;

	&:disabled {
		color: #939393;
	}
`;

export const ResetPasswordButton = styled.button`
	width: 300px;
	height: 40px;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	text-transform: uppercase;
	margin: 20px 0;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
		transition: 0.3s;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoutButton = styled.button`
	width: fit-content;
	border-radius: 5px;
	border: none;
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	font-weight: bold;
	font-size: 0.8rem;
	cursor: pointer;
	margin-top: 20px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const DeleteUserButton = styled(LogoutButton)`
	color: ${({ theme }) => theme.colors.primary};
	background-color: white;
	margin-left: 20px;
`;

export const ConfirmDeleteUserBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
`;

export const ConfirmDeleteUserBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #EEEEEE;
	color: ${({ theme }) => theme.colors.primary};
	padding: 10px;
	border-radius: 10px;
	font-weight: bold;
`;

export const ConfirmDeleteUserButton = styled.button`
	width: fit-content;
	padding: 7px 20px;
	border-radius: 5px;
	border: none;
	margin-top: 10px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	cursor: pointer;
`;

export const CancelDeleteUserButton = styled(ConfirmDeleteUserButton)`
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	margin-left: 10px;
`;
