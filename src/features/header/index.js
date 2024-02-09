import { useEffect, useState } from "react";

import { HeaderContainer } from "./headerContainer";

export const Header = ({ $result, $normalVersion }) => {
	const [animate, setAnimate] = useState(false);
	const [lastResult, setLastResult] = useState(0);

	useEffect(() => {
		if (lastResult !== $result) {
			setAnimate(true);
			setLastResult($result);
			const timer = setTimeout(() => setAnimate(false), 400);
			return () => clearTimeout(timer);
		}
	}, [$result]);

	return (
		<HeaderContainer
			$result={$result}
			$normalVersion={$normalVersion}
			$animate={animate}
		/>
	);
};
