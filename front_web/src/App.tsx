import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Temp from "./components/pages/Temp";
import Shop from "./components/pages/Shop";
import Dishes from "./components/pages/Dishes";

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
				<Route path="/" element={<Temp />} />
				<Route path="/schedule" element={<Temp />} />
				<Route path="/orders" element={<Temp />} />
				<Route path="/users" element={<Temp />} />
				<Route path="/reviews" element={<Temp />} />
				<Route path="/dishes" element={<Dishes />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
