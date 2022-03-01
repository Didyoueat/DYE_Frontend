import React from "react";
import styled, { css } from "styled-components";

type inputType =
	| "modal"
	| "modalCheck"
	| "modalPost"
	| "modalText"
	| "modalPhone"
	| "tableSearch"
	| "date";

export const InputTypes = {
	modal: css`
		width: 380px;
		height: 44px;
		font-size: 24px;
	`,
	modalCheck: css`
		font-size: 24px;
	`,
	modalPost: css`
		width: 295px;
		height: 44px;
		font-size: 24px;
	`,
	modalText: css`
		width: 380px;
		height: 220px;
		font-size: 24px;
	`,
	modalPhone: css`
		width: 108px;
		height: 44px;
		font-size: 24px;
	`,
	tableSearch: css`
		width: 175px;
		height: 25px;
		border: none;
		border-right: 0px;
		border-top: 0px;
		boder-left: 0px;
		boder-bottom: 0px;
		font-size: 18px;
		:focus {
			outline: none;
		}
	`,
	date: css`
		width: 136px;
		height: 36px;
		margin: 0px 0px 8px 0px;
		border: 1px solid #868686;
	`,
};

interface SInput {
	styleType?: inputType;
	width?: any;
	height?: any;
	color?: string;
}

const InputStyles = css<SInput>`
	border-radius: 5px;
	${({ styleType }) => InputTypes[styleType]}
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
			color: ${color};
		`};
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
	styleType,
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
			styleType={styleType}
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
