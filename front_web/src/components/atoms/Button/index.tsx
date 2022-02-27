import React, { ReactChild } from "react";
import styled, { css } from "styled-components";

type buttonType =
	| "defaultWhite"
	| "defaultRed"
	| "search"
	| "circle"
	| "small"
	| "modalLeft"
	| "modalRight"
	| "none";

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
	small: css`
		width: 80px;
		height: 44px;
		color: #333333;
		border: 1px solid #333333;
		border-radius: 20px;
	`,
	modalLeft: css`
		width: 200px;
		height: 60px;
		color: #ff5439;
		background: #ffffff;
		border: 2px solid #ff5439;
		border-radius: 10px;
		font-size: 28px;
		font-weight: 700;
	`,
	modalRight: css`
		width: 200px;
		height: 60px;
		color: #ffffff;
		background: #ff5439;
		border: 2px solid #ff5439;
		border-radius: 10px;
		font-size: 28px;
		font-weight: 700;
	`,
	none: css`
		padding: 0;
		border: none;
		background: none;
	`,
};

interface SButton {
	type?: buttonType;
	width?: string;
	height?: string;
	color?: string;
}

const ButtonStyles = css<SButton>`
	font-size: 18px;
	${({ type }) => ButtonTypes[type]}
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
		`}
`;

const StyledButton = styled.button<SButton>`
	${ButtonStyles}
`;

export interface ButtonProps extends SButton {
	onClick?: any;
	children?: ReactChild;
	value?: any;
}

const Button = ({ onClick, children, ...props }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
