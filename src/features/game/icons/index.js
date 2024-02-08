import React, { useEffect, useState } from "react";
import { iconNormalData } from "../iconData";
import { iconExternalData } from "../iconData";
import { Icon } from "../icon";

import normalBg from "../../../images/bg-triangle.svg";
import extendedBg from "../../../images/bg-pentagon.svg";

import { StyledBox, StyledIconsBox, StyledImg } from "./styled";

export const Icons = ({
	handleSelectedIcon,
	$selectedIcon,
	handleNewGame,
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
		<StyledIconsBox $selectedIcon={$selectedIcon}>
			<StyledBox>
				<StyledImg src={background} />
				{arrayData.map((icon) => {
					return (
						<Icon
							$normalVersion={$normalVersion}
							handleSelectedIcon={handleSelectedIcon}
							handleNewGame={handleNewGame}
							$data={icon}
							key={icon.name}
						/>
					);
				})}
			</StyledBox>
		</StyledIconsBox>
	);
};
