import styled from "styled-components";

export const StyledModalBox = styled.div`
	position: absolute;
	right: -100vw;
	height: 100vh;
	width: 100vw;
	max-width: 100vw;
	transition: 1s ease-in-out;
	transform: ${(props) =>
		props.$activeModal ? "translateX(-100vw)" : "translateX(0)"};
	background: rgb(0 0 0 / 41%);
	z-index: 10;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		background: white;
		padding: 2%;
	}
`;

export const StyledImageBox = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 2%;
	width: fit-content;
	margin: auto;
	align-items: center;
	justify-content: center;
	background: white;
	border-radius: 10px;
	gap: 40px;

	span {
		text-transform: uppercase;
		color: hsl(229deg 42.69% 42.04%);
		font: ${({ theme }) => theme.font.barlowBold};
		font-size: 30px;
		text-align: left;
		width: 100%;

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			width: fit-content;
			font-size: 40px;
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		padding: 0;
	}
`;

export const StyledImage = styled.img`
	padding: 30px;
	padding-bottom: 10px;
	max-width: 100vw;
	max-height: 100vh;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		background: white;
		padding: 2%;
	}
`;

export const StyledIconClose = styled.img`
	position: absolute;
	top: 30px;
	right: 20px;
	padding: 0;
	cursor: pointer;
	transition: 0.2s ease;
	z-index: 999;
	opacity: 0.25;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		bottom: -10vh;
		top: unset;
		right: unset;
		left: 50%;
		transform: translatex(-50%);
	}

	&:hover {
		filter: brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(6142%)
			hue-rotate(358deg) brightness(101%) contrast(112%);
		opacity: 0.7;
	}
	&:active {
		filter: brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(6142%)
			hue-rotate(358deg) brightness(101%) contrast(112%);
		opacity: 1;
	}
`;
