import React from "react";
import styled, { css } from "styled-components";
import Option from "../../atoms/Option";
import Select from "../../atoms/Select";

interface SDropDown {
	width?: any;
	height?: any;
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
}

const DropDown = ({ items, onChange, ...props }: DropDownProps) => {
	return (
		<StyledDropDown {...props}>
			<Select onChange={onChange}>
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
