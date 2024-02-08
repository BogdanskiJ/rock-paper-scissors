import React, { useEffect, useState } from "react";
import {
	StyledAllBox,
	StyledBox,
	StyledIconBox,
	StyledImg,
	StyledInnerBox,
	StyledOuterBox,
} from "./styled";
import icon from "../../../images/icon-paper.svg";

export const Icon = ({
	handleSelectedIcon,
	$data,
	$whoBetter,
	$normalVersion,
	$newSelectedIcon,
}) => {
	const [animate, setAnimate] = useState(false);

	const defaultData = {
		name: "paper",
		src: icon,
		position: {
			top: "50%",
			bottom: "unset",
			left: "50%",
			right: "unset",
		},
		transform: {
			x: "-50%",
			y: "-50%",
		},
		colors: {
			first: "green",
			second: "green",
		},
	};

	const handleOnClick = () => {
		if (handleSelectedIcon && $data) {
			handleSelectedIcon($data);
		}
	};

	useEffect(() => {
		$data === null ? setAnimate(true) : setAnimate(false);
	}, [$data]);

	return (
		<>
			{$data ? (
				<StyledIconBox
					$newSelectedIcon={$newSelectedIcon}
					$normalVersion={$normalVersion}
					$animate={animate}
					$data={$data}
					onClick={handleOnClick}
					$position={$data.position}
					$transform={$data.transform}
					$colors={$data.colors}>
					<StyledImg src={$data.src} />
				</StyledIconBox>
			) : (
				<StyledIconBox
					$newSelectedIcon={$newSelectedIcon}
					$normalVersion={$normalVersion}
					$animate={animate}
					$data={defaultData}
					onClick={handleOnClick}
					$position={defaultData.position}
					$transform={""}
					$colors={defaultData.colors}
				/>
			)}
		</>
	);
};
