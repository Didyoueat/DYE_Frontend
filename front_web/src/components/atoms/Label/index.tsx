import React from "react";
import styled, { css } from "styled-components";

interface SLabel {
	color?: string;
	// 나중에 style 요소 추가
}

const LabelStyles = css<SLabel>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledLabel = styled.label<SLabel>`
	${LabelStyles}
`;

export interface LabelProps extends SLabel {
	type?: any;
	name?: any;
	id?: any;
	children: any;
}

const Label = ({ type, name, id, children }: LabelProps) => {
	return (
		<StyledLabel type={type} name={name} id={id}>
			{children}
		</StyledLabel>
	);
};

export default Label;
