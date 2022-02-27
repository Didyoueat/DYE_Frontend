import React from "react";
import styled, { css } from "styled-components";

interface SInput {
	width?: any;
	height?: any;
	color?: string;
	// 나중에 style 요소 추가
}

const InputStyles = css<SInput>`
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
	onChange?: any;
	value?: any;
	readonly?: any;
	checked?: any;
	placeholder?: any;
}

const Input = ({
	type,
	id,
	onChange,
	value,
	readonly,
	checked,
	placeholder,
}: InputProps) => {
	return (
		<StyledInput
			type={type}
			id={id}
			onChange={onChange}
			value={value}
			{...(readonly && "readonly")}
			checked={checked}
			placeholder={placeholder}
		/>
	);
};

export default Input;
