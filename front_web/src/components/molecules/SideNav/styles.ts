import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// interface NavProps {
// 	width?: string;
// 	height?: string;
// }

export const NavWrapper = styled(Link)`
	box-sizing: border-box;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	text-decoration: none;
	padding: 0.5em 1em;
	text-align: center;
	border: 1px solid #ffffff;
	border-radius: 50px;
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

export default {};
