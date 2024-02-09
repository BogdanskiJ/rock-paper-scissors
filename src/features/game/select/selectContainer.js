import { Icon } from "../icon";

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

export const SelectIconContainer = ({
	$selectedIcon,
	$whoBetter,
	$newSelectedIcon,
	$handleButton,
	$randomIcon,
}) => {
	return (
		<StyledSelectedIconBox $selectedIcon={$selectedIcon}>
			<StyledIconsBox>
				<StyledIconBox $whoBetter={$whoBetter} type="first">
					<span>You Picked</span>
					<StyledOuterBox $whoBetter={$whoBetter === "user" ? true : false}>
						<StyledInnerBox $whoBetter={$whoBetter === "user" ? true : false}>
							<StyledBox $whoBetter={$whoBetter === "user" ? true : false}>
								{$newSelectedIcon ? (
									<Icon
										$data={$newSelectedIcon}
										$whoBetter={$whoBetter}
										$newSelectedIcon={$newSelectedIcon}
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
					<StyledButton onClick={$handleButton} $whoBetter={$whoBetter}>
						Play again
					</StyledButton>
				</StyledButtonBox>

				<StyledIconBox $whoBetter={$whoBetter} type="second">
					<span>The House Picked</span>
					<StyledOuterBox $whoBetter={$whoBetter === "computer" ? true : false}>
						<StyledInnerBox
							$whoBetter={$whoBetter === "computer" ? true : false}>
							<StyledBox $whoBetter={$whoBetter === "computer" ? true : false}>
								{$newSelectedIcon ? (
									<Icon
										$data={$randomIcon}
										$whoBetter={$whoBetter}
										$newSelectedIcon={$newSelectedIcon}
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
