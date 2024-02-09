import { StyledIconBox, StyledImg } from "./styled";

export const IconContainer = ({
	$data,
	$normalVersion,
	$newSelectedIcon,
	$animate,
	$handleOnClick,
	$defaultData,
}) => {
	return (
		<>
			{$data ? (
				<StyledIconBox
					$newSelectedIcon={$newSelectedIcon}
					$normalVersion={$normalVersion}
					$animate={$animate}
					$data={$data}
					onClick={$handleOnClick}
					$position={$data.position}
					$transform={$data.transform}
					$colors={$data.colors}>
					<StyledImg src={$data.src} />
				</StyledIconBox>
			) : (
				<StyledIconBox
					$newSelectedIcon={$newSelectedIcon}
					$normalVersion={$normalVersion}
					$animate={$animate}
					$data={$defaultData}
					onClick={$handleOnClick}
					$position={$defaultData.position}
					$transform={""}
					$colors={$defaultData.colors}
				/>
			)}
		</>
	);
};
