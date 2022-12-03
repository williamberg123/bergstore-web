import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0 20px;

	& form {
		width: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		padding: 20px;
		border-radius: 20px;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};

		& input {
			width: 300px;
			height: 50px;
			border-radius: 10px;
			border: 1px solid ${({ theme }) => theme.colors.lightGray};
			margin-top: 10px;
			padding: 0 15px;
		}

		& input[type="submit"] {
			background-color: ${({ theme }) => theme.colors.primary};
			color: white;
			font-weight: bold;
			font-size: 1rem;
			margin-top: 20px;
			cursor: pointer;
		}
	}

	@media (max-width: 800px) {
		flex-direction: column;
		justify-content: flex-start;

		& form {
			margin-top: 40px;
		}
	}

	@media (max-width: 450px) {
		& form {
			width: 100%;
		}
	}
`;

export const LoginHeader = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px;
	position: absolute;
	top: 0;
	left: 0;

	@media (max-width: 800px) {
		position: static;
		padding: 20px 0;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 800px) {
		width: 100%;
		text-align: center;
		margin-top: 20px;
	}
`;

export const Title = styled.span`
	font-weight: bold;
	font-size: 3rem;
	color: ${({ theme }) => theme.colors.primary};

	@media (max-width: 800px) {
		font-size: 2rem;
	}
`;

export const SubTitle = styled.span`
	font-size: 2rem;
	font-weight: 300;
	color: #AEAEAE;
	margin: 20px 0;

	@media (max-width: 800px) {
		font-size: 1.5rem;
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 300;
	margin-top: 30px;
`;

export const FormTitle = styled.span`
	font-weight: bold;
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.primary};
`;

export const ChangeFormType = styled.span`
	font-weight: 300;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.primary};
	margin-top: 20px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
