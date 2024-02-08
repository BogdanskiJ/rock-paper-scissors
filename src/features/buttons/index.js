import React, { useState } from "react";
import { StyledButtonsBox } from "./styled";

export const Buttons = ({
	$handleRulesModal,
	$handleExternalVersion,
	$normalVersion,
}) => {
	return (
		<StyledButtonsBox>
			<button onClick={$handleExternalVersion}>
				{$normalVersion ? "Extended version" : "Normal Version"}
			</button>
			<button onClick={$handleRulesModal}>Rules</button>
		</StyledButtonsBox>
	);
};
