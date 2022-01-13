import React from "react";
import styled, { css } from "styled-components";

const UlStyles = css`
	list-style: none;
	font-style: normal;
`;

const StyledUl = styled.ul`
	${UlStyles}
`;

export interface UlProps {
	children?: any;
}

const Ul = ({ children }: UlProps) => {
	return <StyledUl>{children}</StyledUl>;
};

export default Ul;
