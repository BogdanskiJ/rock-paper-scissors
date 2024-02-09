import {
	StyledHeaderBox,
	StyledNameSpan,
	StyledNamesBox,
	StyledScoreBox,
} from "./styled";

export const HeaderContainer = ({ $result, $normalVersion, $animate }) => {
	return (
		<StyledHeaderBox>
			<StyledNamesBox $normalVersion={$normalVersion}>
				<StyledNameSpan>Rock</StyledNameSpan>
				<StyledNameSpan>Paper</StyledNameSpan>
				<StyledNameSpan>Scissors</StyledNameSpan>
				<StyledNameSpan $normalVersion={$normalVersion}>Lizard</StyledNameSpan>
				<StyledNameSpan $normalVersion={$normalVersion}>Spock</StyledNameSpan>
			</StyledNamesBox>
			<StyledScoreBox $animate={$animate}>
				<span>Score</span>
				<div>{$result}</div>
			</StyledScoreBox>
		</StyledHeaderBox>
	);
};
