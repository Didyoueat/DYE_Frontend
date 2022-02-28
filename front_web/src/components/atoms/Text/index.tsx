import React from "react";
import styled, { css } from "styled-components";

type textType = "link" | "title" | "bold";

export const TextTypes = {
	link: css`
		text-decoration: none;
		color: #333333;
	`,
	title: css`
		color: #333333;
		font-weight: 700;
		font-size: 48px;
		text-decoration: none;
	`,
	bold: css`
		font-weight: 700;
	`,
};

interface SText {
	color?: string;
	padding?: string;
	type?: textType;
}

const TextStyles = css<SText>`
	margin: 0;
	${({ type }) => TextTypes[type]}
	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}
`;

const StyledText = styled.p<SText>`
	${TextStyles}
`;

export interface TextProps extends SText {
	id?: any;
	onChange?: any;
	children?: any;
}

const Text = ({ children, ...props }: TextProps) => {
	return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
