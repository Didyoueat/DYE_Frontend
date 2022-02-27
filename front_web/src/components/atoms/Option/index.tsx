import React from "react";
import styled, { css } from "styled-components";

interface SOption {
	background?: any;
	color?: any;
}

const OptionStyles = css<SOption>`
	background: #ffffff;
	${({ background }) =>
		background &&
		css`
			background: ${background};
		`}
	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`;

const StyledOption = styled.option<SOption>`
	${OptionStyles}
`;

export interface OptionProps extends SOption {
	value?: any;
	onChange?: any;
	children?: any;
	key?: any;
}

const Option = ({ value, onChange, children, key }: OptionProps) => {
	return (
		<StyledOption value={value} onChange={onChange} key={key}>
			{children}
		</StyledOption>
	);
};

export default Option;
