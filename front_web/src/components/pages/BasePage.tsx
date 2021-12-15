import React, { ReactChild, useEffect } from "react";
import {
	BaseLeft,
	BaseTopMenu,
	BaseLeftMenu,
	BaseTop,
	BaseWrapper,
} from "./BasePageStyle";
import logo from "../../assets/logo.svg";
import calendar_s from "../../assets/calendar_selected.png";
import calendar_u from "../../assets/calendar_unselected.png";
import clipboard_s from "../../assets/clipboard_selected.png";
import clipboard_u from "../../assets/clipboard_unselected.png";
import user_s from "../../assets/user_selected.png";
import user_u from "../../assets/user_unselected.png";
import star_s from "../../assets/star_selected.png";
import star_u from "../../assets/star_unselected.png";
import rice_s from "../../assets/rice_selected.png";
import rice_u from "../../assets/rice_unselected.png";
import shop_s from "../../assets/shop_selected.png";
import shop_u from "../../assets/shop_unselected.png";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules";
import { changePage } from "../../modules/page";

type Props = {
	children: ReactChild;
};

const BasePage = ({ children }: Props) => {
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
					<BaseLeftMenu
						to="../schedule"
						className={
							location.pathname === "/schedule" ? "isActive" : ""
						}
					>
						{location.pathname === "/schedule" ? (
							<img src={calendar_s} alt="calendar" />
						) : (
							<img src={calendar_u} alt="calendar" />
						)}
						일정 보기
					</BaseLeftMenu>
					<BaseLeftMenu
						to="../orders"
						className={
							location.pathname === "/orders" ? "isActive" : ""
						}
					>
						{location.pathname === "/orders" ? (
							<img src={clipboard_s} alt="clipboard" />
						) : (
							<img src={clipboard_u} alt="clipboard" />
						)}
						주문 관리
					</BaseLeftMenu>
					<BaseLeftMenu
						to="../users"
						className={
							location.pathname === "/users" ? "isActive" : ""
						}
					>
						{location.pathname === "/users" ? (
							<img src={user_s} alt="users" />
						) : (
							<img src={user_u} alt="users" />
						)}
						고객 관리
					</BaseLeftMenu>
					<BaseLeftMenu
						to="../"
						className={
							location.pathname === "/reviews" ? "isActive" : ""
						}
					>
						{location.pathname === "/reviews" ? (
							<img src={star_s} alt="reviews" />
						) : (
							<img src={star_u} alt="reviews" />
						)}
						리뷰 관리
					</BaseLeftMenu>
					<BaseLeftMenu
						to="../dishes"
						className={
							location.pathname === "/dishes" ? "isActive" : ""
						}
					>
						{location.pathname === "/dishes" ? (
							<img src={rice_s} alt="dishes" />
						) : (
							<img src={rice_u} alt="dishes" />
						)}
						반찬 관리
					</BaseLeftMenu>
					<BaseLeftMenu
						to="../shop"
						className={
							location.pathname === "/shop" ? "isActive" : ""
						}
					>
						{location.pathname === "/shop" ? (
							<img src={shop_s} alt="shop" />
						) : (
							<img src={shop_u} alt="shop" />
						)}
						매장 관리
					</BaseLeftMenu>
				</div>
				<div className="left-right">{children}</div>
			</BaseLeft>
		</BaseWrapper>
	);
};

export default BasePage;
