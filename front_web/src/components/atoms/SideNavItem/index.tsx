import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface SSideNavItem {
	width?: string;
	height?: string;
}

const SideNavStyles = css<SSideNavItem>`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	padding: 0.5em 1em;
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
	.isActive {
		border: 1px solid #ff5439;
		border-radius: 50px;
		color: #ff5439;
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
	value?: any;
}

const SideNavItem = ({ to, value }: SideNavItemProps) => {
	return <StyledLink to={to}>{value}</StyledLink>;
};

export default SideNavItem;
