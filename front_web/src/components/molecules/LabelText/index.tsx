import React from "react";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";
import Text from "../../atoms/Text";

export interface LabelTextProps {
	label?: any;
	id?: any;
	children?: any;
}

const LabelText = ({ label, id, children }: LabelTextProps) => {
	return (
		<Box type="rowFlex" flexJustify="flex-start">
			<Label htmlFor={id}>{label}</Label>
			<Text id={id} type="bold">
				&nbsp;{children}
			</Text>
		</Box>
	);
};

export default LabelText;
