import React, { useEffect, useState } from "react";
import {
	StyledHeaderBox,
	StyledNameSpan,
	StyledNamesBox,
	StyledScoreBox,
} from "./styled";

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
		<StyledHeaderBox>
			<StyledNamesBox $normalVersion={$normalVersion}>
				<StyledNameSpan>Rock</StyledNameSpan>
				<StyledNameSpan>Paper</StyledNameSpan>
				<StyledNameSpan>Scissors</StyledNameSpan>
				<StyledNameSpan $normalVersion={$normalVersion}>Lizard</StyledNameSpan>
				<StyledNameSpan $normalVersion={$normalVersion}>Spock</StyledNameSpan>
			</StyledNamesBox>
			<StyledScoreBox $animate={animate}>
				<span>Score</span>
				<div>{$result}</div>
			</StyledScoreBox>
		</StyledHeaderBox>
	);
};
