import React, { useEffect, useState } from "react";
import {
	StyledButton,
	StyledIconBox,
	StyledIconsBox,
	StyledSelectedIconBox,
	StyledBox,
	StyledInnerBox,
	StyledOuterBox,
	StyledButtonBox,
} from "./styled";
import { Icon } from "../icon";
import { iconNormalData } from "../iconData";
import { iconExternalData } from "../iconData";

export const SelectIcon = ({
	$selectedIcon,
	handleSelectedIcon,
	handleNewGame,
	$handleResult,
	$handleWhoBetter,
	$whoBetter,
	$normalVersion,
	$handleSaveToLocalStorage,
}) => {
	const [newSelectedIcon, setNewSelectedIcon] = useState("");
	const [randomIcon, setRandomIcon] = useState("");

	const handleButton = () => {
		handleSelectedIcon(false);
		handleNewGame();
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
		<StyledSelectedIconBox $selectedIcon={$selectedIcon}>
			<StyledIconsBox>
				<StyledIconBox $whoBetter={$whoBetter} type="first">
					<span>You Picked</span>
					<StyledOuterBox $whoBetter={$whoBetter === "user" ? true : false}>
						<StyledInnerBox $whoBetter={$whoBetter === "user" ? true : false}>
							<StyledBox $whoBetter={$whoBetter === "user" ? true : false}>
								{newSelectedIcon ? (
									<Icon
										$data={newSelectedIcon}
										$whoBetter={$whoBetter}
										$newSelectedIcon={newSelectedIcon}
									/>
								) : (
									""
								)}
							</StyledBox>
						</StyledInnerBox>
					</StyledOuterBox>
				</StyledIconBox>
				<StyledButtonBox $whoBetter={$whoBetter}>
					<span>
						{$whoBetter === "user"
							? "you win"
							: $whoBetter === "computer"
							? "you lose"
							: "draw"}
					</span>
					<StyledButton onClick={handleButton} $whoBetter={$whoBetter}>
						Play again
					</StyledButton>
				</StyledButtonBox>

				<StyledIconBox $whoBetter={$whoBetter} type="second">
					<span>The House Picked</span>
					<StyledOuterBox $whoBetter={$whoBetter === "computer" ? true : false}>
						<StyledInnerBox
							$whoBetter={$whoBetter === "computer" ? true : false}>
							<StyledBox $whoBetter={$whoBetter === "computer" ? true : false}>
								{newSelectedIcon ? (
									<Icon
										$data={randomIcon}
										$whoBetter={$whoBetter}
										$newSelectedIcon={newSelectedIcon}
									/>
								) : (
									""
								)}
							</StyledBox>
						</StyledInnerBox>
					</StyledOuterBox>
				</StyledIconBox>
			</StyledIconsBox>
		</StyledSelectedIconBox>
	);
};
