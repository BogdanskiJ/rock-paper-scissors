import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>

			<body>
				Score Rules You Picked The House Picked You Win You Lose Play Again
				<div class="attribution">
					Challenge by
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="#">Your Name Here</a>.
				</div>
			</body>
		</div>
	);
}

export default App;
