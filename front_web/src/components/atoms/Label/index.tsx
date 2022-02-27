import React from "react";
import styled, { css } from "styled-components";

type labelType = "modal";

export const LabelTypes = {
	modal: css`
		background: #f5f4f2;
	`,
};

interface SLabel {
	color?: string;
	type?: labelType;
}

const LabelStyles = css<SLabel>`
	${({ type }) => LabelTypes[type]}
	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`;

const StyledLabel = styled.label<SLabel>`
	${LabelStyles}
`;

export interface LabelProps extends SLabel {
	htmlFor?: any;
	children?: any;
}

const Label = ({ children, ...props }: LabelProps) => {
	return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
