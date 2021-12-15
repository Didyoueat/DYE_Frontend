/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/LoginPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import RenderPage from "./components/pages/RenderPage";

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

const App = () => {
	console.log(window.location.pathname);
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/schedule" element={<RenderPage />} />
				<Route path="/orders" element={<RenderPage />} />
				<Route path="/users" element={<RenderPage />} />
				<Route path="/dishes" element={<RenderPage />} />
				<Route path="/shop" element={<RenderPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
