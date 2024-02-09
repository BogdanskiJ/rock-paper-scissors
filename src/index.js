import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Normalize />
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);

reportWebVitals();
