import React from "react";
import styled, { css } from "styled-components";

type pageBoxType = "rowFlex" | "none";

export const PageBoxTypes = {
	rowFlex: css`
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-end;
		padding: 0 0.5em;
	`,
	none: css`
		height: 100%;
	`,
};

interface SPageBox {
	width?: any;
	height?: any;
	type?: any;
}

const PageBoxStyles = css<SPageBox>`
	width: 80%;
	height: 100%;
	${({ type }) => PageBoxTypes[type]}
`;

const StyledPageBox = styled.div<SPageBox>`
	${PageBoxStyles}
`;

export interface PageBoxProps extends SPageBox {
	children?: any;
}

const PageBox = ({ children, ...props }: PageBoxProps) => {
	return <StyledPageBox {...props}>{children}</StyledPageBox>;
};

export default PageBox;
