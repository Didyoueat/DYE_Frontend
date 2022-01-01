import React from "react";
import styled, { css } from "styled-components";

interface SInput {
	color?: string;
	// 나중에 style 요소 추가
}

const InputStyles = css<SInput>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledInput = styled.input<SInput>`
	${InputStyles}
`;

export interface InputProps extends SInput {
	type?: any;
	name?: any;
}

const Input = ({ type, name }: InputProps) => {
	return <StyledInput type={type} name={name} />;
};

export default Input;
