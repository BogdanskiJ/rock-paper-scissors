import { Icons } from "./icons";
import { SelectIcon } from "./select";

import { StyledBackground, StyledGameBox } from "./styled";

export const GameContainer = ({
	$handleResult,
	$whoBetter,
	$handleWhoBetter,
	$normalVersion,
	$handleSaveToLocalStorage,
	$handleSelectedIcon,
	$selectedIcon,
	$handleNewGame,
}) => {
	return (
		<StyledGameBox>
			<StyledBackground>
				<Icons
					$normalVersion={$normalVersion}
					$handleSelectedIcon={$handleSelectedIcon}
					$selectedIcon={$selectedIcon}
					$handleNewGame={$handleNewGame}
				/>
				<SelectIcon
					$handleSaveToLocalStorage={$handleSaveToLocalStorage}
					$normalVersion={$normalVersion}
					$handleResult={$handleResult}
					$selectedIcon={$selectedIcon}
					$handleSelectedIcon={$handleSelectedIcon}
					$handleNewGame={$handleNewGame}
					$handleWhoBetter={$handleWhoBetter}
					$whoBetter={$whoBetter}
				/>
			</StyledBackground>
		</StyledGameBox>
	);
};
