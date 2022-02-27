import React from "react";
import Box from "@atoms/Box";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import DropDown from "@molecules/DropDown";

export interface PhoneInputProps {
	styleType?: any;
	label?: any;
	id?: any;
	value?: any;
	setValue?: any;
}

const PhoneInput = ({
	styleType,
	id,
	label,
	value,
	setValue,
}: PhoneInputProps) => {
	const front = ["02", "010", "011"];
	const phone = value.slice();

	return (
		<Box
			type="rowFlex"
			background={styleType === "modalPhone" && "#f5f4f2"}
			margin={styleType && "20px 0px"}
		>
			<Label htmlFor={id}>{label}</Label>
			<Box
				type="rowFlex"
				width="388px"
				background={styleType === "modalPhone" && "#f5f4f2"}
			>
				<DropDown
					width={styleType === "modalPhone" && "108px"}
					height={styleType === "modalPhone" && "44px"}
					items={front}
					selected={phone[0]}
				/>
				-
				<Input
					styleType={styleType}
					type="text"
					id={id}
					onChange={(e) => {
						phone[1] = e.target.value;
						setValue(phone);
					}}
					value={phone[1]}
				/>
				-
				<Input
					styleType={styleType}
					type="text"
					id={id}
					onChange={(e) => {
						phone[2] = e.target.value;
						setValue(phone);
					}}
					value={phone[2]}
				/>
			</Box>
		</Box>
	);
};

export default PhoneInput;
