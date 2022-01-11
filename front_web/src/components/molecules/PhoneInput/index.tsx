import React from "react";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";

export interface PhoneInputProps {
	id?: any;
	label?: any;
}

const PhoneInput = ({ id, label }: PhoneInputProps) => {
	return (
		<Box type="rowFlex">
			<Label htmlFor={id}>{label}</Label>
		</Box>
	);
};

export default PhoneInput;
