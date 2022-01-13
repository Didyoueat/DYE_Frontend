import React from "react";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import DropDown from "../DropDown";

export interface PhoneInputProps {
	label?: any;
	id?: any;
	value?: any;
	setValue?: any;
}

const PhoneInput = ({ id, label, value, setValue }: PhoneInputProps) => {
	const front = ["02", "010", "011"];
	const phone = value.slice();

	return (
		<Box type="rowFlex">
			<Label htmlFor={id}>{label}</Label>
			<DropDown items={front} selected={phone[0]} />-
			<Input
				type="text"
				id={id}
				onChange={(e) => {
					phone[1] = e.target.value;
					setValue(phone);
				}}
				value={phone[1]}
			/>
			<Input
				type="text"
				id={id}
				onChange={(e) => {
					phone[2] = e.target.value;
					setValue(phone);
				}}
				value={phone[2]}
			/>
		</Box>
	);
};

export default PhoneInput;
