import { useEffect, useState } from "react";

import { iconNormalData } from "../iconData";
import { iconExternalData } from "../iconData";

import { SelectIconContainer } from "./selectContainer";

export const SelectIcon = ({
	$selectedIcon,
	$handleSelectedIcon,
	$handleNewGame,
	$handleResult,
	$whoBetter,
	$normalVersion,
}) => {
	const [newSelectedIcon, setNewSelectedIcon] = useState("");
	const [randomIcon, setRandomIcon] = useState("");

	const handleButton = () => {
		$handleSelectedIcon(false);
		$handleNewGame();
	};

	const handleRandomIcon = () => {
		if ($normalVersion) {
			let gameLength = iconNormalData.length;
			let number = Math.floor(Math.random() * gameLength);
			return iconNormalData[number];
		} else {
			let gameLength = iconExternalData.length;
			let number = Math.floor(Math.random() * gameLength);
			return iconExternalData[number];
		}
	};

	useEffect(() => {
		if (newSelectedIcon && randomIcon) {
			$handleResult(newSelectedIcon, randomIcon);
		}
	}, [randomIcon]);

	useEffect(() => {
		const randomIconTimeout = setTimeout(() => {
			setRandomIcon(handleRandomIcon);
		}, 1500);
		return () => clearTimeout(randomIconTimeout);
	}, [newSelectedIcon]);

	useEffect(() => {
		if ($selectedIcon) {
			setNewSelectedIcon(() => ({
				...$selectedIcon,
				position: {
					top: "unset",
					bottom: "unset",
					left: "unset",
					right: "unset",
				},
				transform: {
					x: "0",
					y: "0",
				},
			}));
		}
		setRandomIcon(null);
	}, [$selectedIcon]);

	return (
		<SelectIconContainer
			$selectedIcon={$selectedIcon}
			$whoBetter={$whoBetter}
			$newSelectedIcon={newSelectedIcon}
			$handleButton={handleButton}
			$randomIcon={randomIcon}
		/>
	);
};
