import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Temp from "@pages/Temp";
import Shop from "@pages/Shop";
import Dishes from "@pages/Dishes";
import Users from "@pages/Users";

const GlobalStyle = createGlobalStyle`
	html {
		width: 100%;
		height: 100%;
	}
	body {
		font-size: 18px;
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
				<Route path="/dashboard" element={<Temp />} />
				<Route path="/orders" element={<Temp />} />
				<Route path="/users" element={<Users />} />
				<Route path="/reviews" element={<Temp />} />
				<Route path="/dishes" element={<Dishes />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
