import React from "react";
import ScheduleView from "../views/ScheduleView";
import OrdersView from "../views/OrdersView";
import UsersView from "../views/UsersView";
import DishesView from "../views/DishesView";
import ShopView from "../views/ShopView";
import BasePage from "./BasePage";
import { useSelector } from "react-redux";
import { rootState } from "../../modules";

const RenderPage = () => {
	const pagename = useSelector(
		(state: rootState) => state.pageReducer.pagename
	);

	let page = <div>😎 오류 😎</div>;
	if (pagename === "schedule") page = <ScheduleView></ScheduleView>;
	else if (pagename === "orders") page = <OrdersView></OrdersView>;
	else if (pagename === "users") page = <UsersView></UsersView>;
	else if (pagename === "dishes") page = <DishesView></DishesView>;
	else if (pagename === "shop") page = <ShopView></ShopView>;

	return <BasePage>{page}</BasePage>;
};

export default RenderPage;
