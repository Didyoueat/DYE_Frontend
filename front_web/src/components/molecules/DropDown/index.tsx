import React from "react";
import styled, { css } from "styled-components";
import Option from "@atoms/Option";
import Select from "@atoms/Select";

interface SDropDown {
	width?: any;
	height?: any;
	fontSize?: any;
}

const DropDownStyles = css<SDropDown>`
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

const StyledDropDown = styled.div<SDropDown>`
	${DropDownStyles}
`;

export interface DropDownProps extends SDropDown {
	items: Array<string>;
	onChange?: any;
	selected?: any;
}

const DropDown = ({ items, onChange, selected, ...props }: DropDownProps) => {
	return (
		<StyledDropDown {...props}>
			<Select
				width="100%"
				height="100%"
				defaultValue={selected}
				onChange={onChange}
			>
				{items.map((item) => {
					return (
						<Option key={item} value={item}>
							{item}
						</Option>
					);
				})}
			</Select>
		</StyledDropDown>
	);
};

export default DropDown;
