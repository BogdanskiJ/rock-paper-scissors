import { Icon } from "../icon";

import { StyledBox, StyledIconsBox, StyledImg } from "./styled";

export const IconsContainer = ({
	$handleSelectedIcon,
	$selectedIcon,
	$handleNewGame,
	$normalVersion,
	$arrayData,
	$background,
}) => {
	return (
		<StyledIconsBox $selectedIcon={$selectedIcon}>
			<StyledBox>
				<StyledImg src={$background} />
				{$arrayData &&
					$arrayData.map((icon) => {
						return (
							<Icon
								$normalVersion={$normalVersion}
								$handleSelectedIcon={$handleSelectedIcon}
								$handleNewGame={$handleNewGame}
								$data={icon}
								key={icon.name}
							/>
						);
					})}
			</StyledBox>
		</StyledIconsBox>
	);
};
