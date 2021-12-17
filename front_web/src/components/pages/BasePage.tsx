import React, { ReactChild, useEffect } from "react";
import {
	BaseLeft,
	BaseTopMenu,
	BaseLeftMenu,
	BaseTop,
	BaseWrapper,
} from "./BasePageStyle";
import logo from "../../assets/logo.svg";
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
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules";
import { changePage } from "../../modules/page";

interface BasePageProps {
	children: ReactChild;
}

interface MenuProps {
	pagename: string;
	name: string;
}

const Menu = ({ pagename, name }: MenuProps) => {
	const mappingImg = [
		["schedule", schedule_s, schedule_u],
		["orders", orders_s, orders_u],
		["users", users_s, users_u],
		["reviews", reviews_s, reviews_u],
		["dishes", dishes_s, dishes_u],
		["shop", shop_s, shop_u],
	];

	let selected;
	let unselected;

	for (let i = 0; i < 6; i++) {
		if (pagename === mappingImg[i][0]) {
			selected = mappingImg[i][1];
			unselected = mappingImg[i][2];
		}
	}

	return (
		<BaseLeftMenu
			to={`../${pagename}`}
			className={location.pathname === `/${pagename}` ? "isActive" : ""}
		>
			{location.pathname === `/${pagename}` ? (
				<img src={selected} alt={pagename} />
			) : (
				<img src={unselected} alt={pagename} />
			)}
			{name}
		</BaseLeftMenu>
	);
};

const BasePage = ({ children }: BasePageProps) => {
	const dispatch = useDispatch();
	const pagename = useSelector(
		(state: rootState) => state.pageReducer.pagename
	);

	useEffect(() => {
		if (pagename !== location.pathname.substring(1))
			dispatch(changePage(location.pathname.substring(1)));
	});

	return (
		<BaseWrapper>
			<BaseTop>
				<div className="top-left">
					<img src={logo} alt="dye_logo" />
					<div className="title">사장님 관리 페이지</div>
				</div>
				<div className="top-right">
					<BaseTopMenu to="../">내 정보</BaseTopMenu>|
					<BaseTopMenu to="../">공지사항</BaseTopMenu>|
					<BaseTopMenu to="../">이용 가이드</BaseTopMenu>|
					<BaseTopMenu to="../">문의하기</BaseTopMenu>|
					<BaseTopMenu to="../">로그아웃</BaseTopMenu>
				</div>
			</BaseTop>
			<BaseLeft>
				<div className="left-left">
					{/*이거 배열로 매핑해서 더 줄이기 가능*/}
					<Menu pagename="schedule" name="일정 보기" />
					<Menu pagename="orders" name="주문 관리" />
					<Menu pagename="users" name="고객 관리" />
					<Menu pagename="reviews" name="리뷰 관리" />
					<Menu pagename="dishes" name="반찬 관리" />
					<Menu pagename="shop" name="매장 관리" />
				</div>
				<div className="left-right">{children}</div>
			</BaseLeft>
		</BaseWrapper>
	);
};

export default BasePage;
