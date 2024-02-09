import { StyledImageBox, StyledModalBox } from "./styled";

import bg from "../../images/background.webp";

export const InitialModal = () => {
	return (
		<StyledModalBox>
			<StyledImageBox src={bg}></StyledImageBox>
		</StyledModalBox>
	);
};
