import { useEffect, useState } from "react";

import { iconNormalData } from "../iconData";
import { iconExternalData } from "../iconData";

import { IconsContainer } from "./iconsContainer";

import normalBg from "../../../images/bg-triangle.svg";
import extendedBg from "../../../images/bg-pentagon.svg";

export const Icons = ({
	$handleSelectedIcon,
	$selectedIcon,
	$handleNewGame,
	$normalVersion,
}) => {
	const [arrayData, setArrayData] = useState(iconNormalData);
	const [background, setBackground] = useState(extendedBg);

	useEffect(() => {
		if ($normalVersion) {
			setBackground(normalBg);
			setArrayData(iconNormalData);
		} else {
			setBackground(extendedBg);
			setArrayData(iconExternalData);
		}
	}, [$normalVersion]);

	return (
		<IconsContainer
			$handleSelectedIcon={$handleSelectedIcon}
			$selectedIcon={$selectedIcon}
			$handleNewGame={$handleNewGame}
			$normalVersion={$normalVersion}
			$arrayData={arrayData}
			$background={background}
		/>
	);
};
