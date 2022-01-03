import React from "react";
import Box from "../../atoms/Box";
import TopNavItem from "../../atoms/TopNavItem";

// export interface TopNavProps {
// }

const TopNav = () => {
	return (
		<Box type="rowFlex">
			<TopNavItem to="/" value="내 정보" />|
			<TopNavItem to="/" value="공지사항" />|
			<TopNavItem to="/" value="이용 가이드" />|
			<TopNavItem to="/" value="문의하기" />|
			<TopNavItem to="/" value="로그아웃" />
		</Box>
	);
};

export default TopNav;
