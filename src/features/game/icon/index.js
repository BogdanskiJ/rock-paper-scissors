import { useEffect, useState } from "react";

import { IconContainer } from "./iconContainer";

import { defaultData } from "../iconData";

export const Icon = ({
	$handleSelectedIcon,
	$data,
	$normalVersion,
	$newSelectedIcon,
}) => {
	const [animate, setAnimate] = useState(false);

	const handleOnClick = () => {
		if ($handleSelectedIcon && $data) {
			$handleSelectedIcon($data);
		}
	};

	useEffect(() => {
		$data === null ? setAnimate(true) : setAnimate(false);
	}, [$data]);

	return (
		<IconContainer
			$handleSelectedIcon={$handleSelectedIcon}
			$data={$data}
			$normalVersion={$normalVersion}
			$newSelectedIcon={$newSelectedIcon}
			$animate={animate}
			$handleOnClick={handleOnClick}
			$defaultData={defaultData}
		/>
	);
};
