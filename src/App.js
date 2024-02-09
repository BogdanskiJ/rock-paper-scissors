import { useEffect, useState } from "react";

import { InitialModal } from "./features/initalModal";
import { Buttons } from "./features/buttons";
import { Game } from "./features/game";
import { Header } from "./features/header";
import { RulesModal } from "./features/rulesModal";

import { StyledApp, StyledContainer } from "./styled";

import normalRules from "./images/image-rules.svg";
import extendedRules from "./images/image-rules-bonus.svg";

function App() {
	const [result, setResult] = useState(0);
	const [whoBetter, setWhoBetter] = useState("initial");
	const [modalSrc, setModalSrc] = useState("");
	const [activeModal, setActiveModal] = useState(false);
	const [normalVersion, setNormalVersion] = useState(true);

	useEffect(() => {
		const resultFromLocalStorage = localStorage.getItem("result");
		if (resultFromLocalStorage) {
			setResult(JSON.parse(resultFromLocalStorage));
		}
	}, []);

	const handleSaveToLocalStorage = (newResult) => {
		localStorage.setItem("result", result + newResult);
	};

	const handleExternalVersion = () => {
		setNormalVersion(!normalVersion);
	};

	const handleRulesModal = () => {
		if (normalVersion) {
			setModalSrc(normalRules);
		} else {
			setModalSrc(extendedRules);
		}
		setActiveModal(!activeModal);
	};

	const handleWhoBetter = (name, newResult) => {
		setWhoBetter(name);
		handleSaveToLocalStorage(newResult);
		setResult(result + newResult);
	};

	const handleResult = (user, computer) => {
		if (user.name && computer.name) {
			if (computer.name === user.name) {
				return handleWhoBetter("nobody", 0);
			} else if (
				(user.name === "paper" && computer.name === "rock") ||
				(user.name === "paper" && computer.name === "spock") ||
				(user.name === "scissors" && computer.name === "lizard") ||
				(user.name === "scissors" && computer.name === "paper") ||
				(user.name === "spock" && computer.name === "scissors") ||
				(user.name === "spock" && computer.name === "rock") ||
				(user.name === "lizard" && computer.name === "spock") ||
				(user.name === "lizard" && computer.name === "paper") ||
				(user.name === "rock" && computer.name === "lizard") ||
				(user.name === "rock" && computer.name === "scissors")
			) {
				return handleWhoBetter("user", 1);
			} else {
				if (result === 0) {
					return handleWhoBetter("computer", 0);
				}
				return handleWhoBetter("computer", -1);
			}
		}
	};

	return (
		<StyledApp>
			<StyledContainer>
				<Header $result={result} $normalVersion={normalVersion} />
				<Game
					$handleSaveToLocalStorage={handleSaveToLocalStorage}
					$handleResult={handleResult}
					$whoBetter={whoBetter}
					$handleWhoBetter={handleWhoBetter}
					$normalVersion={normalVersion}
				/>
				<Buttons
					$normalVersion={normalVersion}
					$handleRulesModal={handleRulesModal}
					$handleExternalVersion={handleExternalVersion}
				/>
				<RulesModal
					$modalSrc={modalSrc}
					$activeModal={activeModal}
					$handleRulesModal={handleRulesModal}
				/>
				<InitialModal />
			</StyledContainer>
		</StyledApp>
	);
}

export default App;
