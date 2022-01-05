import React from "react";
import styled, { css } from "styled-components";

type boxType = "rowFlex" | "colFlex";

export const BoxTypes = {
	rowFlex: css`
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		.isActive {
			border: 1px solid #ff5439;
			border-radius: 50px;
			color: #ff5439;
		}
	`,
	colFlex: css`
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: space-between;
	`,
};

interface SBox {
	width?: any;
	height?: any;
	borderBottom?: any;
	background?: any;
	padding?: any;
	flexJustify?: any;
	type?: boxType;
}

const BoxStyles = css<SBox>`
	background: #ffffff;
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
	${({ borderBottom }) =>
		borderBottom &&
		css`
			border-bottom: ${borderBottom};
		`}
	${({ background }) =>
		background &&
		css`
			background: ${background};
		`}
	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}
	${({ flexJustify }) =>
		flexJustify &&
		css`
			justify-content: ${flexJustify};
		`}
	${({ type }) => BoxTypes[type]}
`;

const StyledBox = styled.div<SBox>`
	${BoxStyles}
`;

export interface BoxProps extends SBox {
	children?: any;
}

const Box = ({ children, ...props }: BoxProps) => {
	return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
