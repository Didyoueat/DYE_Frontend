import React, { ReactChild } from "react";
import styled, { css } from "styled-components";

interface SButton {
	color?: string;
}

const ButtonStyles = css<SButton>`
	${({ color }) =>
		color &&
		css`
			color: #ff5439;
		`}
`;

const StyledButton = styled.button<SButton>`
	${ButtonStyles}
`;

export interface ButtonProps extends SButton {
	type?: any;
	onClick?: any;
	children?: ReactChild;
}

const Button = ({ type, onClick, children }: ButtonProps) => {
	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
