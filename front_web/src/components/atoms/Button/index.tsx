import React, { ReactChild } from "react";
import styled, { css } from "styled-components";

type buttonType =
	| "defaultWhite"
	| "defalutRed"
	| "search"
	| "circle"
	| "modalLeft"
	| "modalRight";

export const ButtonTypes = {
	defaultWhite: css`
		width: 90px;
		height: 36px;
		color: #ff5439;
		background: #ffffff;
		border: 1px solid #ff5439;
		border-radius: 30px;
	`,
	defaultRed: css`
		width: 90px;
		height: 36px;
		color: #ffffff;
		background: #ff5439;
		border: 1px solid #ff5439;
		border-radius: 30px;
	`,
	search: css`
		width: 68px;
		height: 36px;
		color: #ffffff;
		background: #ff5439;
		border: 1px solid #ff5439;
		border-radius: 10px;
	`,
	circle: css`
		width: 50px;
		height: 50px;
		font-size: 1.5em;
		color: #ffffff;
		background: #ff5439;
		border: 2px solid #ff5439;
		border-radius: 50px;
	`,
	modalLeft: css`
		width: 100px;
		height: 30px;
		color: #ff5439;
		background: #ffffff;
		border: 2px solid #ff5439;
		border-radius: 10px;
	`,
	modalRight: css`
		width: 100px;
		height: 30px;
		color: #ffffff;
		background: #ff5439;
		border: 2px solid #ff5439;
		border-radius: 10px;
	`,
};

interface SButton {
	color?: string;
	type?: buttonType;
}

const ButtonStyles = css<SButton>`
	${({ type }) => ButtonTypes[type]}
	${({ color }) =>
		color &&
		css`
			color: ${color};
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
