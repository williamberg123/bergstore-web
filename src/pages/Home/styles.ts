import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	flex-wrap: wrap;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const TitleSpan = styled.span`
	font-size: 2rem;
	animation: toemergetitlespan 1s ease;

	@media (max-width: 800px) {
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
	}

	@keyframes toemergetitlespan {
		0% {
			transform: translateX(-70px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}
`;

export const PinkText = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
`;

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	animation: toemergeiconscontainer 1s ease;

	& svg {
		width: 50px;
		height: 50px;
		color: #AEAEAE;
		margin: 20px 0;
	}

	& svg:first-child {
		width: 60px;
		height: 60px;
	}

	& svg:nth-child(2) {
		margin-left: 100px;
	}

	@media (max-width: 800px) {
		margin-top: 30px;

		& svg {
			width: 40px;
			height: 40px;
		}

		& svg:first-child {
			width: 50px;
			height: 50px;
		}
	}

	@keyframes toemergeiconscontainer {
		0% {
			transform: translateX(70px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}
`;
