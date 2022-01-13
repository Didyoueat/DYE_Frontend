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
}

const Option = ({ value, onChange, children }: OptionProps) => {
	return (
		<StyledOption value={value} onChange={onChange}>
			{children}
		</StyledOption>
	);
};

export default Option;
