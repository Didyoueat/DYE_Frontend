import React from "react";
import styled, { css } from "styled-components";

interface SCard {
	width?: any;
	height?: any;
	border?: any;
	borderRadius?: any;
	background?: any;
}

const CardStyles = css<SCard>`
	border: 1px solid #000000;
	border-raduis: 10px;
	margin: 0.2em;
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
	${({ height }) =>
		height &&
		css`
			height: ${height};
		`}
    ${({ border }) =>
		border &&
		css`
			border: ${border};
		`}
    ${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`}
    ${({ background }) =>
		background &&
		css`
			background: ${background};
		`}
`;

const StyledCard = styled.div<SCard>`
	${CardStyles}
`;

export interface CardProps extends SCard {
	children?: any;
}

const Card = ({ children, ...props }: CardProps) => {
	return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
