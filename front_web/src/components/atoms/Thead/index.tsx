import React from "react";
import styled, { css } from "styled-components";

interface SThead {
	color?: string;
	// 나중에 style 요소 추가
}

const TheadStyles = css<SThead>`
	height: 60px;
	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`;

const StyledThead = styled.thead<SThead>`
	${TheadStyles};
`;

export interface TheadProps extends SThead {
	children?: any;
}

const Thead = ({ children, ...props }: TheadProps) => {
	return <StyledThead {...props}>{children}</StyledThead>;
};

export default Thead;
