import React from "react";
import styled, { css } from "styled-components";

type boxType = "rowFlex" | "colFlex" | "colUpFlex" | "modal";

export const BoxTypes = {
	rowFlex: css`
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		.isActive {
			background: #ff5439;
			border-radius: 50px;
			color: #ffffff;
		}
	`,
	colFlex: css`
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: space-between;
	`,
	colUpFlex: css`
		display: flex;
		flex-flow: column wrap;
		align-items: center;
	`,
	modal: css`
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		max-height: 80%;
		width: 40em;
		height: 35em;
		padding: 1em;
		border-radius: 10px;
		text-align: center;
		background: #f5f4f2;
		box-shadow: 0px 3px 10px rgba(51, 51, 51, 0.1);
	`,
};

interface SBox {
	width?: any;
	height?: any;
	border?: any;
	background?: any;
	padding?: any;
	flexAlign?: any;
	flexJustify?: any;
	overflow?: any;
	display?: any;
	type?: boxType;
}

const BoxStyles = css<SBox>`
	background: #ffffff;
	${({ type }) => BoxTypes[type]}
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
	${({ flexAlign }) =>
		flexAlign &&
		css`
			align-items: ${flexAlign};
		`}
	${({ overflow }) =>
		overflow &&
		css`
			overflow: ${overflow};
		`}
	${({ display }) =>
		display &&
		css`
			display: ${display};
		`}
`;

const StyledBox = styled.div<SBox>`
	${BoxStyles}
`;

export interface BoxProps extends SBox {
	children?: any;
	className?: any;
}

const Box = ({ children, ...props }: BoxProps) => {
	return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
