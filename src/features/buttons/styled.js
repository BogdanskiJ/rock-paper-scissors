import styled from "styled-components";

export const StyledButtonsBox = styled.div`
	width: fit-content;
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	padding: 20px;
	z-index: 2;
	gap: 10px;

	button {
		background: transparent;
		border: 1px solid ${({ theme }) => theme.color.white};
		color: ${({ theme }) => theme.color.white};
		padding: 8px;
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 600;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:hover {
			background: white;
			color: red;
		}
		&:active {
			background: white;
			color: #6f0000;
		}

		@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
			font-size: 12px;
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
		right: 50%;
		transform: translateX(50%);
		padding: 30px;
		gap: 5px;
		flex-direction: row;
	}
`;
