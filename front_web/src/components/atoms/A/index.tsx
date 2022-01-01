import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// import logo from "../../assets/logo.svg";

interface SA {
	color?: string;
	// 나중에 style 요소 추가
}

const AStyles = css<SA>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledSpan = styled.span<SA>`
	${AStyles}
`;

export interface AProps extends SA {
	to?: any;
	// image?: any;
	children?: any;
}

const A = ({ to, children }: AProps) => {
	const location = "/";
	return (
		<StyledSpan>
			<Link to={to ? to : location}>
				{/* <img src={image ? image : logo} alt={location} /> */}
				{children}
			</Link>
		</StyledSpan>
	);
};

export default A;
