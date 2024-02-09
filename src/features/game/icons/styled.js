import styled from "styled-components";

export const StyledIconsBox = styled.div`
	width: 100%;
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${(props) =>
		props.$selectedIcon
			? "slide-left1 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards"
			: "slide-right1 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards"};

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		margin-top: 5%;
	}

	@keyframes slide-left1 {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(-100vw);
			transform: translateX(-100vw);
		}
	}

	@keyframes slide-right1 {
		0% {
			-webkit-transform: translateX(-100vw);
			transform: translateX(-100vw);
		}
		100% {
			-webkit-transform: translateX(50%);
			transform: translateX(50%);
		}
	}
`;

export const StyledImg = styled.img`
	width: 100%;
	height: 100%;
`;

export const StyledBox = styled.div`
	max-height: 33vh;
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	position: relative;
`;
