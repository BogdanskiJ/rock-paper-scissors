import styled from "styled-components";

export const StyledModalBox = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	background: rgba(255, 255, 255, 1);
	z-index: 999;
	-webkit-animation-name: rotateOutUpRight;
	animation-name: rotateOutUpRight;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	animation-delay: 1s;

	@-webkit-keyframes rotateOutUpRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			opacity: 1;
		}
		100% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate3d(0, 0, 1, 90deg);
			transform: rotate3d(0, 0, 1, 90deg);
			opacity: 0;
			display: none;
		}
	}
	@keyframes rotateOutUpRight {
		0% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			opacity: 1;
		}
		100% {
			-webkit-transform-origin: right bottom;
			transform-origin: right bottom;
			-webkit-transform: rotate3d(0, 0, 1, 90deg);
			transform: rotate3d(0, 0, 1, 90deg);
			opacity: 0;
			display: none;
		}
	}
`;

export const StyledImageBox = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	max-width: 100vw;
	max-height: 100vw;
	aspect-ratio: 1/1;
	border-radius: 20px;
	transform: translate(-50%, -50%);
	gap: 40px;
`;
