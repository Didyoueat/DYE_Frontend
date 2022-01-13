import React from "react";
import styled, { css } from "styled-components";

interface SSelect {
	width?: any;
	height?: any;
	border?: any;
	borderRadius?: any;
	background?: any;
}

const SelectStyles = css<SSelect>`
	border: 1px solid #000000;
	border-redius: 5px;
	background: #ffffff;
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
	${({ height }) =>
		height &&
		css`
			height: ${height};
		`}
    ${({ border }) =>
		border &&
		css`
			border: ${border};
		`}
    ${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`}
    ${({ background }) =>
		background &&
		css`
			background: ${background};
		`}
`;

const StyledSelect = styled.select<SSelect>`
	${SelectStyles}
`;

export interface SelectProps extends SSelect {
	onChange?: any;
	children?: any;
}

const Select = ({ children, ...props }: SelectProps) => {
	return <StyledSelect {...props}>{children}</StyledSelect>;
};

export default Select;
