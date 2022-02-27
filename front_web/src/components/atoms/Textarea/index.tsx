import React from "react";
import styled, { css } from "styled-components";

interface STextarea {
	width?: any;
	height?: any;
}

const TextareaStyles = css<STextarea>`
	width: 380px;
	height: 220px;
	font-size: 24px;
	border-radius: 5px;
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
`;

const StyledTextarea = styled.textarea<STextarea>`
	${TextareaStyles}
`;

export interface TextareaProps extends STextarea {
	placeholder?: any;
	id?: any;
	onChange?: any;
	value?: any;
	readonly?: any;
}

const Textarea = ({ ...props }: TextareaProps) => {
	return <StyledTextarea {...props}></StyledTextarea>;
};

export default Textarea;
