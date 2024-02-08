import React from "react";
import {
	StyledIconClose,
	StyledImage,
	StyledImageBox,
	StyledModalBox,
} from "./styled";
import bg from "../../images/background.webp";

export const InitialModal = () => {
	return (
		<StyledModalBox>
			<StyledImageBox src={bg}>
				{/* <StyledIconClose />
				<span>rules</span> */}
			</StyledImageBox>
		</StyledModalBox>
	);
};
