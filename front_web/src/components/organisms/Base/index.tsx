import React from "react";
import Box from "../../atoms/Box";
import HomeBtn from "../../molecules/HomeBtn";
import TopNav from "../../molecules/TopNav";
import SideNavItem from "../../molecules/SideNavItem";

import schedule_s from "../../assets/calendar_selected.png";
import schedule_u from "../../assets/calendar_unselected.png";
import orders_s from "../../assets/clipboard_selected.png";
import orders_u from "../../assets/clipboard_unselected.png";
import users_s from "../../assets/user_selected.png";
import users_u from "../../assets/user_unselected.png";
import reviews_s from "../../assets/star_selected.png";
import reviews_u from "../../assets/star_unselected.png";
import dishes_s from "../../assets/rice_selected.png";
import dishes_u from "../../assets/rice_unselected.png";
import shop_s from "../../assets/shop_selected.png";
import shop_u from "../../assets/shop_unselected.png";

interface BaseProps {
	children?: any;
}

const Base = ({ children }: BaseProps) => {
	const location = window.location.pathname.split("/")[1];
	const srcs = [];
	const mappingImg = {
		schedule: [schedule_s, schedule_u],
		orders: [orders_s, orders_u],
		users: [users_s, users_u],
		reviews: [reviews_s, reviews_u],
		dishes: [dishes_s, dishes_u],
		shop: [shop_s, shop_u],
	};

	for (let i = 0; i < Object.keys(mappingImg).length; i++) {
		if (location === Object.keys(mappingImg)[i])
			srcs.push(mappingImg[Object.keys(mappingImg)[i]][0]);
		else srcs.push(mappingImg[Object.keys(mappingImg)[i]][1]);
	}

	return (
		<Box type="colFlex" width="100%" height="100%" background="#e5e5e5">
			<Box type="rowFlex" width="100%" borderBottom="1.5px solid #e5e5e5">
				<HomeBtn></HomeBtn>
				<TopNav></TopNav>
			</Box>
			<Box type="rowFlex" width="100%" height="80%" background="#e5e5e5">
				<Box type="colFlex" height="100%">
					<SideNavItem to="/schedule" src={srcs[0]} val="일정 관리" />
					<SideNavItem to="/orders" src={srcs[1]} val="주문 관리" />
					<SideNavItem to="/users" src={srcs[2]} val="고객 관리" />
					<SideNavItem to="/reviews" src={srcs[3]} val="리뷰 관리" />
					<SideNavItem to="/dishes" src={srcs[4]} val="반찬 관리" />
					<SideNavItem to="/shop" src={srcs[5]} val="매장 관리" />
				</Box>
				{children}
			</Box>
		</Box>
	);
};

export default Base;
