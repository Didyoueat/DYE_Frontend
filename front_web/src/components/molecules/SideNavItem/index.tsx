import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Box from "../../atoms/Box";

interface SSideNavItem {
	width?: string;
	height?: string;
}

const SideNavStyles = css<SSideNavItem>`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	padding: 0.5em 1em;
	margin: 1em 0.5em;
	text-align: center;
	border: 1px solid #000000;
	border-radius: 50px;
	text-decoration: none;
	color: #333333;
	img {
		width: 2.5em;
		height: 2.5em;
		padding-right: 0.8em;
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
		<Box type="rowFlex">
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
