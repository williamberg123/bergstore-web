import styled, { css } from 'styled-components';

export const Container = styled.span<{ type: 'SUCCESS' | 'ERROR', show: boolean, isFirstRender: boolean }>`
	font-family: 'Montserrat', sans-serif;
	font-size: 0.8rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
	background-color: ${({ type }) => type === 'SUCCESS' ? '#009775' : '#ff3333'};
	color: white;
	text-align: center;
	padding: 5px 10px;
	border-radius: 10px;
	position: fixed;
	top: ${({ show }) => show ? '20px' : '-50px'};
	left: calc(50% - 150px);
	right: calc(50% - 150px);
	z-index: 3;

	${({ show, isFirstRender }) => {
		return show
		? css`
			animation: 0.3s toemergemessage ease-in-out;
		`
		: (
			!isFirstRender && 'animation: 0.3s toexitmessage ease-in-out;'
		);
	}}

	& svg {
		width: 20px;
		height: 20px;
		background-color: ${({ type }) => type === 'SUCCESS' ? '#009775' : '#ff3333'};
		color: white;
		border-radius: 50%;
	}

	@keyframes toemergemessage {
		0% {
			opacity: 0%;
			transform: translateY(-50px);
		}

		100% {
			opacity: 100%;
			transform: translateY(0px);
		}
	}

	@keyframes toexitmessage {
		0% {
			opacity: 100%;
			transform: translateY(70px);
		}

		100% {
			opacity: 0%;
			transform: translateY(-50px);
		}
	}
`;
