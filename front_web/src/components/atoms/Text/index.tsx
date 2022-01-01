import React from "react";
import styled, { css } from "styled-components";

interface SText {
	color?: string;
	// 나중에 style 요소 추가
}

const TextStyles = css<SText>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
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
