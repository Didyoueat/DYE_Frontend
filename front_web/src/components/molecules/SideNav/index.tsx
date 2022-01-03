import React from "react";
import { NavWrapper } from "./styles";

export interface SideNavProps {
	to?: any;
	children?: any;
}

const SideNav = ({ children, ...props }: SideNavProps) => {
	const location = window.location.pathname;
	return (
		<NavWrapper to={location} {...props}>
			{children}
		</NavWrapper>
	);
};

export default SideNav;
