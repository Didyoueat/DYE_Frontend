import React from "react";
import Box from "@atoms/Box";
import Label from "@atoms/Label";
import Text from "@atoms/Text";

export interface LabelTextProps {
	styleType?: any;
	label?: any;
	id?: any;
	onChange?: any;
	children?: any;
}

const LabelText = ({
	styleType,
	label,
	id,
	onChange,
	children,
}: LabelTextProps) => {
	return (
		<Box
			type="rowFlex"
			background={styleType === "modal" && "#f5f4f2"}
			margin={styleType && "20px 0px"}
		>
			<Label htmlFor={id}>{label}</Label>
			<Text id={id} type="bold" onChange={onChange}>
				&nbsp;{children}
			</Text>
		</Box>
	);
};

export default LabelText;
