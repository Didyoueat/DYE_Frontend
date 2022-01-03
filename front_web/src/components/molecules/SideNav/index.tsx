import React from "react";
import Box from "../../atoms/Box";
import SideNavItem from "../../atoms/SideNavItem";

interface SSideNav {
	width?: any;
	height?: any;
}

export interface SideNavProps extends SSideNav {
	selected?: any;
}

const SideNav = ({ width, height, ...props }: SideNavProps) => {
	return (
		<Box type="colFlex" width={width} height={height} padding="1em">
			<SideNavItem to="/" value="일정 관리" />
			<SideNavItem to="/" value="주문 관리" />
			<SideNavItem to="/" value="고객 관리" />
			<SideNavItem to="/" value="리뷰 관리" />
			<SideNavItem to="/" value="반찬 관리" />
			<SideNavItem to="/" value="매장 관리" />
		</Box>
	);
};

export default SideNav;
