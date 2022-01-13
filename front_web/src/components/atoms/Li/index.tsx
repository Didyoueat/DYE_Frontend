import React from "react";
import styled, { css } from "styled-components";

const LiStyles = css`
	list-style: none;
`;

const StyledLi = styled.li`
	${LiStyles}
`;

export interface LiProps {
	children?: any;
}

const Li = ({ children }: LiProps) => {
	return <StyledLi>{children}</StyledLi>;
};

export default Li;
