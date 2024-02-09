import styled from "styled-components";

export const StyledSelectedIconBox = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-between;
	align-items: center;
	transition: 2s ease-in-out;

	animation: ${(props) =>
		props.$selectedIcon
			? "slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards"
			: "slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards"};

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		height: 65vh;
	}

	@keyframes slide-left {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(100vw);
			transform: translateX(100vw);
		}
	}

	@keyframes slide-right {
		0% {
			-webkit-transform: translateX(100vw);
			transform: translateX(100vw);
		}
		100% {
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
		}
	}
`;

export const StyledIconsBox = styled.div`
	width: 66%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 100%;
	gap: 5%;
	transition: 2s ease-in-out;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		align-items: flex-end;
	}
`;

export const StyledIconBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	align-items: center;
	width: 33%;
	position: relative;
	transition: 1s ease-in-out;
	transform: ${(props) =>
		props.type === "first"
			? props.$whoBetter === "initial"
				? "translateX(10%)"
				: "translateX(-10%)"
			: props.$whoBetter === "initial"
			? "translateX(-10%)"
			: "translateX(10%)"};

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		flex-direction: column-reverse;
	}

	span {
		text-transform: uppercase;
		color: ${({ theme }) => theme.color.white};
		font: ${({ theme }) => theme.font.barlowBold};
		font-size: 30px;
		text-align: center;

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			white-space: nowrap;
			font-size: 20px;
			position: absolute;
			top: 60%;
		}
		@media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
			font-size: 15px;
		}
	}

	div {
		position: absolute;
		width: 40vh;
		max-width: 30vw;
		aspect-ratio: 1/1;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			max-width: 25vw;
			transform: translate(-50%, -55%);
		}
	}
`;

export const StyledButtonBox = styled.div`
	display: flex;
	width: auto;
	opacity: ${(props) => (props.$whoBetter === "initial" ? "0" : "1")};
	visibility: ${(props) =>
		props.$whoBetter === "initial" ? "hidden" : "visible"};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 5;
	transition: 1s ease-in-out;
	text-transform: uppercase;
	gap: 20px;

	span {
		color: ${({ theme }) => theme.color.white};
		font: ${({ theme }) => theme.font.barlowBold};
		font-weight: 600;
		font-size: 45px;
		text-align: center;

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			font-size: 45px;
			white-space: nowrap;
		}
	}

	animation: ${(props) =>
		props.$whoBetter !== "initial"
			? "slide-top 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
			: "none"};

	@keyframes slide-top {
		0% {
			-webkit-transform: translateY(-100px);
			transform: translateY(-100px) scale(0);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0) scale(1);
		}
	}
`;

export const StyledButton = styled.button`
	min-width: 50px;
	min-height: 20px;
	z-index: 99;
	background: white;
	border: none;
	border-radius: 6px;
	width: 100%;
	text-transform: uppercase;
	transition: 5s ease-in-out;
	padding: 15px 0;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	transition: 5s ease-in-out;
	font: ${({ theme }) => theme.font.barlowBold};
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 2px;
	line-height: 1;
	color: ${({ theme }) => theme.color.scoreText};

	&:hover {
		color: red;
	}
`;

export const StyledOuterBox = styled.div`
	border-radius: 50%;
	background: ${(props) =>
		props.$whoBetter ? "rgb(255 255 255 / 2%)" : "unset"};
	padding: 340px;
	z-index: 1;
	transition: 0.2s ease-in-out;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		padding: 200px;
	}
`;
export const StyledInnerBox = styled.div`
	border-radius: 50%;
	background: ${(props) =>
		props.$whoBetter ? "rgb(255 255 255 / 3%)" : "unset"};
	padding: 260px;
	z-index: 1;
	transition: 0.2s ease-in-out;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		padding: 160px;
	}
`;
export const StyledBox = styled.div`
	border-radius: 50%;
	background: ${(props) =>
		props.$whoBetter ? "rgb(255 255 255 / 4%)" : "unset"};
	z-index: 1;
	padding: 180px;
	transition: 0.2s ease-in-out;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		padding: 120px;
	}

	div {
		cursor: unset;
	}
`;
