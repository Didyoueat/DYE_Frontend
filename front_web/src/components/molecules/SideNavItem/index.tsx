import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Box from "@atoms/Box";

interface SSideNavItem {
	width?: string;
	height?: string;
}

const SideNavStyles = css<SSideNavItem>`
	width: 180px;
	height: 48px;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	text-align: center;
	margin: auto;
	padding-left: 28px;
	text-decoration: none;
	color: #333333;
	img {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
	${({ height }) =>
		height &&
		css`
			width: ${height};
		`}
`;

const StyledLink = styled(Link)<SSideNavItem>`
	${SideNavStyles}
`;

export interface SideNavItemProps {
	to?: any;
	src?: any;
	val?: any;
}

const SideNavItem = ({ to, src, val }: SideNavItemProps) => {
	const location = window.location.pathname.split("/")[1];
	return (
		<Box type="rowFlex" width="80%" height="5%">
			<StyledLink
				to={to}
				className={to.split("/")[1] === location ? "isActive" : ""}
			>
				<img src={src} alt={to.split("/")[1]} />
				{val}
			</StyledLink>
		</Box>
	);
};

export default SideNavItem;
