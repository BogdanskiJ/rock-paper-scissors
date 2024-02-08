import styled from "styled-components";

export const StyledHeaderBox = styled.div`
	width: 50%;
	min-width: 375px;
	max-width: 900px;
	border: 3px solid ${({ theme }) => theme.color.headerOutline};
	padding: 20px;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 50px;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		margin: 10px 0 0 0;
		padding: 10px;
		min-width: 250px;
	}
`;

export const StyledNamesBox = styled.div`
	display: flex;
	flex-direction: column;
	transition: 1s ease-in-out;

	span {
		text-transform: uppercase;
		color: ${({ theme }) => theme.color.white};
		font: ${({ theme }) => theme.font.barlowBold};
		font-size: ${(props) => (props.$normalVersion ? "40px" : "24px")};

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			font-size: ${(props) => (props.$normalVersion ? "24px" : "16px")};
		}
	}
`;

export const StyledScoreBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
	border: 1px solid black;
	border-radius: 10px;
	background: white;
	gap: 10px;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		padding: 0 20px;
		gap: 0px;
	}

	span {
		text-transform: uppercase;
		font: ${({ theme }) => theme.font.barlowBold};
		font-weight: 700;
		font-size: 14px;
		letter-spacing: 2px;
		color: ${({ theme }) => theme.color.scoreText};

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			font-size: 10px;
		}
	}

	div {
		font: ${({ theme }) => theme.font.barlowBold};
		font-size: 50px;
		color: ${({ theme }) => theme.color.darkTheme};
		${({ $animate }) =>
			$animate &&
			`animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;`}

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			font-size: 40px;
		}

		@keyframes flip-vertical-right {
			0% {
				transform: rotateX(0);
			}
			100% {
				transform: rotateX(-360deg);
			}
		}
	}
`;

export const StyledNameSpan = styled.span`
	display: ${(props) => (props.$normalVersion ? "none" : "flex")};
`;
