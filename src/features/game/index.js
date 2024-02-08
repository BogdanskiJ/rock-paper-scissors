import React, { useEffect, useState } from "react";
import { StyledBackground, StyledGameBox } from "./styled";
import { Icons } from "./icons";
import { SelectIcon } from "./select";

export const Game = ({
	$handleResult,
	$result,
	$whoBetter,
	$handleWhoBetter,
	$normalVersion,
	$handleSaveToLocalStorage,
}) => {
	const [selectedIcon, setSelectedIcon] = useState(null);
	const [newGame, setNewGame] = useState(true);
	const [result, setResult] = useState(0);
	const [computerSelected, setComputerSelected] = useState("");
	const [userSelected, setUserSelected] = useState("");
	const [animate, setAnimate] = useState(false);

	const handleSelectedIcon = (icon) => {
		if (selectedIcon && icon) {
		} else if (!selectedIcon) {
			setSelectedIcon(icon);
		} else if (!icon) {
			setSelectedIcon(false);
		}
	};

	const handleNewGame = () => {
		$handleWhoBetter("initial", 0);
		setNewGame(!newGame);
	};

	return (
		<StyledGameBox>
			<StyledBackground>
				<Icons
					$normalVersion={$normalVersion}
					handleSelectedIcon={handleSelectedIcon}
					$selectedIcon={selectedIcon}
					handleNewGame={handleNewGame}
				/>
				<SelectIcon
					$handleSaveToLocalStorage={$handleSaveToLocalStorage}
					$normalVersion={$normalVersion}
					$handleResult={$handleResult}
					$selectedIcon={selectedIcon}
					handleSelectedIcon={handleSelectedIcon}
					handleNewGame={handleNewGame}
					$handleWhoBetter={$handleWhoBetter}
					$whoBetter={$whoBetter}
				/>
			</StyledBackground>
		</StyledGameBox>
	);
};
