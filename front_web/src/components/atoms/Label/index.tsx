import React from "react";
import styled, { css } from "styled-components";

interface SLabel {
	color?: string;
	// 나중에 style 요소 추가
}

const LabelStyles = css<SLabel>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledLabel = styled.label<SLabel>`
	${LabelStyles}
`;

export interface LabelProps extends SLabel {
	for?: any;
	children?: any;
}

const Label = ({ children, ...props }: LabelProps) => {
	return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
