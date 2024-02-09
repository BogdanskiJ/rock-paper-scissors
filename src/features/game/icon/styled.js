import styled from "styled-components";

export const StyledIconBox = styled.div`
	position: absolute;
	padding: ${(props) => (props.$normalVersion ? "25%" : "17%")};
	cursor: pointer;
	border-radius: 50%;
	aspect-ratio: 1/1;
	overflow: hidden;
	border: ${(props) => (props.$newSelectedIcon ? "30px" : "15px")} solid
		${(props) => props.$colors.second};
	top: ${(props) => props.$position.top};
	bottom: ${(props) => props.$position.bottom};
	left: ${(props) => props.$position.left};
	right: ${(props) => props.$position.right};
	background: white;
	box-shadow: inset 0px 10px 1px -4px rgb(0 0 0 / 20%),
		0 10px 1px -3px ${(props) => props.$colors.first};
	transform: ${(props) =>
		`translate(${props.$transform.x},${props.$transform.y})`};
	animation: ${(props) =>
		props.$animate ? "rotate-hor-center 0.5s linear infinite both" : "unset"};
	transition: 0.2s ease-in-out;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		border: 15px solid ${(props) => props.$colors.second};
	}

	@keyframes rotate-hor-center {
		0% {
			transform: translate(-50%, -50%) rotateX(0);
		}
		100% {
			transform: translate(-50%, -50%) rotateX(-360deg);
		}
	}
`;

export const StyledImg = styled.img`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	height: 50%;
`;
