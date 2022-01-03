import React from "react";
import styled, { css } from "styled-components";

type textType = "link" | "title";

export const TextTypes = {
	link: css`
		text-decoration: none;
		color: #333333;
	`,
	title: css`
		color: #333333;
		font-weight: 700;
		font-size: 1.2em;
		text-decoration: none;
	`,
};

interface SText {
	type?: textType;
}

const TextStyles = css<SText>`
	${({ type }) => TextTypes[type]}
`;

const StyledText = styled.p<SText>`
	${TextStyles}
`;

export interface TextProps extends SText {
	children?: any;
}

const Text = ({ children }: TextProps) => {
	return <StyledText>{children}</StyledText>;
};

export default Text;
