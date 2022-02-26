import React from "react";
import Box from "@atoms/Box";
import SideNavItem from "@molecules/SideNavItem";

import dashboard_s from "@assets/dashboard_selected.png";
import dashboard_u from "@assets/dashboard_unselected.png";
import orders_s from "@assets/clipboard_selected.png";
import orders_u from "@assets/clipboard_unselected.png";
import users_s from "@assets/user_selected.png";
import users_u from "@assets/user_unselected.png";
import reviews_s from "@assets/star_selected.png";
import reviews_u from "@assets/star_unselected.png";
import dishes_s from "@assets/rice_selected.png";
import dishes_u from "@assets/rice_unselected.png";
import shop_s from "@assets/shop_selected.png";
import shop_u from "@assets/shop_unselected.png";

const SideNav = () => {
	const location = window.location.pathname.split("/")[1];
	const params = [
		{
			key: "dashboard",
			selected: dashboard_s,
			unselected: dashboard_u,
			val: "일정 관리",
		},
		{
			key: "orders",
			selected: orders_s,
			unselected: orders_u,
			val: "주문 관리",
		},
		{
			key: "users",
			selected: users_s,
			unselected: users_u,
			val: "고객 관리",
		},
		{
			key: "reviews",
			selected: reviews_s,
			unselected: reviews_u,
			val: "리뷰 관리",
		},
		{
			key: "dishes",
			selected: dishes_s,
			unselected: dishes_u,
			val: "반찬 관리",
		},
		{
			key: "shop",
			selected: shop_s,
			unselected: shop_u,
			val: "매장 관리",
		},
	];

	return (
		<Box type="colUpFlex" width="228px" height="100%">
			{params.map((params) => (
				<SideNavItem
					key={params["key"]}
					to={"/" + params["key"]}
					src={
						location === params["key"]
							? params["selected"]
							: params["unselected"]
					}
					val={params["val"]}
				/>
			))}
		</Box>
	);
};

export default SideNav;
