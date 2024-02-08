import styled from "styled-components";
import bg from "../../images/bg-triangle.svg";

export const StyledGameBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		margin-bottom: auto;
		height: fit-content;
	}
`;

export const StyledBackground = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 200%;
	height: 100%;
`;
