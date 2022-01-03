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
	id?: any;
}

const Input = ({ type, id }: InputProps) => {
	return <StyledInput type={type} id={id} />;
};

export default Input;
