import React from "react";
import styled, { css } from "styled-components";

interface SThead {
	color?: string;
	// 나중에 style 요소 추가
}

const TheadStyles = css<SThead>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
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
