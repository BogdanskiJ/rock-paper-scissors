import { useState } from "react";

import { GameContainer } from "./gameContainer";

export const Game = ({
	$handleResult,
	$whoBetter,
	$handleWhoBetter,
	$normalVersion,
	$handleSaveToLocalStorage,
}) => {
	const [selectedIcon, setSelectedIcon] = useState(null);
	const [newGame, setNewGame] = useState(true);

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
		<GameContainer
			$handleResult={$handleResult}
			$whoBetter={$whoBetter}
			$handleWhoBetter={$handleWhoBetter}
			$normalVersion={$normalVersion}
			$handleSaveToLocalStorage={$handleSaveToLocalStorage}
			$handleSelectedIcon={handleSelectedIcon}
			$selectedIcon={selectedIcon}
			$handleNewGame={handleNewGame}
		/>
	);
};
