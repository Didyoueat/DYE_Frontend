import React from "react";
import Box from "@atoms/Box";
import SideNavItem from "@molecules/SideNavItem";
import ShopProfile from "@molecules/ShopProfile";

import dashboard_s from "@assets/dashboard_white.svg";
import dashboard_u from "@assets/dashboard_black.svg";
import orders_s from "@assets/subscription_white.svg";
import orders_u from "@assets/subscription_black.svg";
import users_s from "@assets/customer_white.svg";
import users_u from "@assets/customer_black.svg";
import reviews_s from "@assets/star_white.svg";
import reviews_u from "@assets/star_black.svg";
import dishes_s from "@assets/banchan_white.svg";
import dishes_u from "@assets/banchan_black.svg";
import shop_s from "@assets/shop_white.svg";
import shop_u from "@assets/shop_black.svg";

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
		<Box type="colUpFlex" width="228px" height="1016px">
			<ShopProfile dong="매탄동" businessName="동찬이네" />
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
