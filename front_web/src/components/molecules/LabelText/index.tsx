import React from "react";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";
import Text from "../../atoms/Text";

export interface LabelTextProps {
	label?: any;
	id?: any;
	onChange?: any;
	children?: any;
}

const LabelText = ({ label, id, onChange, children }: LabelTextProps) => {
	return (
		<Box type="rowFlex">
			<Label htmlFor={id}>{label}</Label>
			<Text id={id} type="bold" onChange={onChange}>
				&nbsp;{children}
			</Text>
		</Box>
	);
};

export default LabelText;
