import React from "react";
import styled, { css } from "styled-components";

interface SBox {
	height?: any;
	width?: any;
}

const BoxStyles = css<SBox>`
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
