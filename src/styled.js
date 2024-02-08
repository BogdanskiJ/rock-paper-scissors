import styled from "styled-components";

export const StyledAttribution = styled.div`
	position: absolute;
	bottom: 0;
	transform: translateY(100px);
`;

export const StyledApp = styled.div`
	height: 100vh;
`;

export const StyledContainer = styled.div`
	background: ${({ theme }) => theme.color.backgroundRadialGradient};
	height: 100%;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
