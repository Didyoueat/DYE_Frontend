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
	border-radius: 5px;
	background: #ffffff;
	font-size: 24px;
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
	defaultValue?: any;
	onChange?: any;
	children?: any;
	value?: any;
}

const Select = ({ children, ...props }: SelectProps) => {
	return <StyledSelect {...props}>{children}</StyledSelect>;
};

export default Select;
