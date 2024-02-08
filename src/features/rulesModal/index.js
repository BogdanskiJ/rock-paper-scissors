import React from "react";
import {
	StyledIconClose,
	StyledImage,
	StyledImageBox,
	StyledModalBox,
} from "./styled";
import iconClose from "../../images/icon-close.svg";

export const RulesModal = ({ $modalSrc, $activeModal, $handleRulesModal }) => {
	return (
		<StyledModalBox $activeModal={$activeModal}>
			<StyledImageBox>
				<StyledIconClose src={iconClose} onClick={$handleRulesModal} />
				<span>rules</span>
				<StyledImage src={$modalSrc} />
			</StyledImageBox>
		</StyledModalBox>
	);
};
