import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/pages/Example";
import Shop from "./components/pages/Shop";

const GlobalStyle = createGlobalStyle`
	html {
		width: 100%;
		height: 100%;
	}
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		// position: fixed;
		// overflow: hidden;
		// touch-action: none;
	}
	#root {
		width: 100%;
		height: 100%;
	}
`;

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Example />} />
				<Route path="/schedule" element={<Example />} />
				<Route path="/orders" element={<Example />} />
				<Route path="/users" element={<Example />} />
				<Route path="/reviews" element={<Example />} />
				<Route path="/dishes" element={<Example />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
