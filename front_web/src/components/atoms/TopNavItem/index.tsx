import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface STopNavItem {
	width?: string;
	height?: string;
}

const TopNavStyles = css<STopNavItem>`
	box-sizing: border-box;
	display: block;
	text-decoration: none;
	color: #333333;
	padding: 0.5em 1em;
	text-align: center;

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

const StyledLink = styled(Link)<STopNavItem>`
	${TopNavStyles}
`;

export interface TopNavItemProps {
	to?: any;
	value?: any;
}

const TopNavItem = ({ to, value }: TopNavItemProps) => {
	return <StyledLink to={to}>{value}</StyledLink>;
};

export default TopNavItem;
