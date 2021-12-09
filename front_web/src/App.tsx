/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/LoginPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ShopPage from "./components/pages/ShopPage";
import SchedulePage from "./components/pages/SchedulePage";
import OrdersPage from "./components/pages/OrdersPage";
import UsersPage from "./components/pages/UsersPage";
import DishesPage from "./components/pages/DishesPage";

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
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="/orders" element={<OrdersPage />} />
				<Route path="/users" element={<UsersPage />} />
				<Route path="/dishes" element={<DishesPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
