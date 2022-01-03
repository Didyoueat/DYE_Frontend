import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/pages/Example";

const GlobalStyle = createGlobalStyle`
	html {
		width: 100%;
		height: 100%;
	}
	body {
		width: 100%;
		height: 100%;
	}
	#root {
		width: 100%;
		height: 100%;
	}
`;

function App() {
	console.log(window.location.pathname);
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				{/* <Route path="/" element={<Base />} /> */}
				<Route path="/*" element={<Example />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
